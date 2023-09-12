import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { hash } from "bcrypt";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const {name, email, password, accessName} = req.body
      
      const userExist = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if (userExist) {
        return res.status(400).json({error: "User already exists"})
      }

      const access = await prisma.access.findUnique({
        where: {
          name: accessName
        }
      }) 

      if (!access) {
        return res
          .status(400)
          .json({ error: "This access level does not exist" });
      }

      const hashedPassword = await hash(password, 8)

      const user = await prisma.user.create({
        data: {
          email, password: hashedPassword, name, userAccess: {
            create: {
              Access: {
                connect: {
                  name: accessName
                }
              }
            }
          }
        },
        select: {
          id: true,
          name: true,
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

      res.status(201).json(user)
    } catch (error) {
      res.status(400).json(error)
    }

  }
  async getAll(req: Request, res: Response) {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  }
}