import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class AccessController {
  async create(req: Request, res: Response) {
    try {
      const { accessName } = req.body;

      const accessExist = await prisma.access.findUnique({
        where: {
          name: accessName,
        },
      });

      if (accessExist) {
        res.status(400).json({ error: "Access already exist" });
      }

      const access = await prisma.access.create({
        data: {
          name: accessName,
        },
      });

      res.status(201).json(access);
    } catch (error) {
      res.json(400).json(error);
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const allAccess = await prisma.access.findMany()
      res.status(200).json(allAccess)

    } catch (error) {
      res.status(400).json(error)
    }
  }
}
