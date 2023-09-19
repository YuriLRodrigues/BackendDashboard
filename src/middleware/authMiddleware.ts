import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";
import { UserRequest } from "../types/Auth";

type DecodedToken = {
  sub: string
}

export function AuthMiddleware (permissions?: string[]) {
  return async (req: UserRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({error: "Invalid authorization token"})
    }

    const token = authHeader.split(" ")[1].trim()

    try {
      const MY_SECRET_KEY = process.env.SECRET

      if (!MY_SECRET_KEY){
        throw new Error("Invalid secret key")
      }

      const decodedToken = verify(token, MY_SECRET_KEY) as DecodedToken
      console.log(decodedToken.sub)
      req.userId = decodedToken.sub

      if (permissions) {
        const user = await prisma.user.findUnique({
          where: {
            id: decodedToken.sub
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
        console.log(user)
        const userPermissions = user?.userAccess.map((perm: any)=> perm.Access?.name) ?? []
        console.log(userPermissions)
        const hasPermissions = permissions.some((perm)=> userPermissions.includes(perm))
        console.log(hasPermissions)

        if (!hasPermissions){
          res.status(403).json({error: "Insuficient permissions"})
        }
      }
      return next()

    } catch (error) {
      res.status(403).json({error: "Permission denied"})
    }

  }
}