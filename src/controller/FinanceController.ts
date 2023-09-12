import { Response, Request } from "express";
import { format } from "date-fns";
import { prisma } from "../database/prismaClient";
import { UserRequest } from "../types/Auth";

export class FinanceController {
  async newBuy(req: UserRequest, res: Response) {
    const { payment, store, value } = req.body;
    const date = format(new Date(), "dd/MM/yyyy");
    const hours = format(new Date(), "HH:mm:ss");
    const [hour, minutes] = hours.split(":");
    const [day, month, year] = date.split("/");
    const userId = req.userId;

    try {
      const finance = await prisma.finance.create({
        data: {
          User: {
            connect: {
              id: userId,
            },
          },
          FinanceData: {
            create: {
              day,
              hour,
              minutes,
              month,
              payment,
              store,
              value,
              year,
            },
          },
        },
        include: {
          FinanceData: {
            select: {
              day: true,
              month: true,
              year: true,
              hour: true,
              minutes: true,
              payment: true,
              store: true,
              value: true,
            },
          },
          User: {
            select: {
              name:true
            }
          }
        },
      });
      res.status(201).json(finance);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async getAll(req: UserRequest, res: Response) {
    const userId = req.userId;

    try {
      const finances = await prisma.finance.findMany({
        where: {
          userId,
        },
        select: {
          FinanceData: {
            select: {
              year: true,
              month: true,
              day: true,
              hour: true,
              minutes: true,
              payment: true,
              id: true,
              store: true,
              value: true,
            },
          },
          User: {
            select: {
              name:true
            }
          }
        },
      });
      res.status(200).json(finances);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
