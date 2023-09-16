import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { hash } from "bcrypt";
import { UserRequest } from "../types/Auth";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, accessName, cpf } = req.body;

      const emailExist = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (emailExist) {
        return res.status(400).json({ error: "User already exists" });
      }

      const cpfExist = await prisma.user.findUnique({
        where: {
          cpf,
        },
      });

      if (cpfExist) {
        return res.status(400).json({ error: "CPF already exists" });
      }

      const access = await prisma.access.findUnique({
        where: {
          name: accessName,
        },
      });

      if (!access) {
        return res
          .status(400)
          .json({ error: "This access level does not exist" });
      }

      const hashedPassword = await hash(password, 8);

      const user = await prisma.user.create({
        data: {
          cpf,
          email,
          password: hashedPassword,
          name,
          userAccess: {
            create: {
              Access: {
                connect: {
                  name: accessName,
                },
              },
            },
          },
        },
        select: {
          id: true,
          name: true,
          balance: true,
          account: true,
          userAccess: {
            select: {
              Access: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async getAll(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
  async findUser(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          email: true,
          password: true,
          name: true,
        },
      });

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async allDataUser(req: UserRequest, res: Response) {
    try {
      const userId = req.userId;

      const userData = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          account: true,
          balance: true,
          email: true,
          id: true,
          name: true,
          Finance: {
            select: {
              FinanceData: {
                select: {
                  finance: true,
                  day: true,
                  hour: true,
                  minutes: true,
                  month: true,
                  year: true,
                  value: true,
                  transation: true,
                  payment: true,
                  store: true,
                  id: true,
                  product: true,
                },
              },
            },
          },
        },
      });

      if (!userData) {
        return res.status(400).json({error: "User not found"})
      }

      return res.status(200).json(userData)

    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
