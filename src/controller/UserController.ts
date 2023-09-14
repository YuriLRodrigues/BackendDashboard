import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";
import { compare, hash } from "bcrypt";

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
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
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

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ error: "Invalid password" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
