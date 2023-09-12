import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class SessionController {
  async signIn(req: Request, res: Response) {
    try {
      const {email, password} = req.body
      
      const user = await prisma.user.findUnique({
        where: {
          email
        },
        include: {
          userAccess: {
            select: {
              Access: {
                select: {
                  name: true
                }
              }
            }
          }
        }
      })

      if (!user) {
        return res.status(400).json({error: 'User not found'})
      }

      const passwordMatch = await compare(password, user.password)

      if (!passwordMatch) {
        return res.status(400).json({error: 'Invalid password'})
      }

      const MY_SECRET_KEY = process.env.SECRET

      if (!MY_SECRET_KEY){
        return res.status(400).json({error: 'Invalid secret key'})
      }

      const token = sign({
        userId: user.id, roles: user.userAccess.map(role=> role.Access?.name)
      }, MY_SECRET_KEY, {
        algorithm: "HS256",
        expiresIn: "24h"
      })

      res.status(200).json({token})

    } catch (error) {
      res.status(400).json({error})
    }
}
}
