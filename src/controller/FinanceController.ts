import { Response } from "express";
import { format } from "date-fns";
import { prisma } from "../database/prismaClient";
import { UserRequest } from "../types/Auth";

export class FinanceController {
  async newExpense(req: UserRequest, res: Response) {
    const { payment, store, value, transation, product, title } = req.body;
    const date = format(new Date(), "dd/MM/yyyy");
    const hours = format(new Date(), "HH:mm:ss");
    const [hour, minutes] = hours.split(":");
    const [day, month, year] = date.split("/");
    const userId = req.userId;

    try {
      const userBalance = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          balance: true,
          account: true,
          email: true,
          created_At: true,
          name: true,
        },
      });

      if (userBalance && userBalance?.balance < value) {
        return res.status(400).json({ error: "Insufficient balance" });
      }

      const user = await prisma.finance.create({
        data: {
          User: {
            connect: {
              id: userId,
            },
          },
          FinanceData: {
            create: {
              product,
              title,
              day,
              hour,
              minutes,
              month,
              payment,
              store,
              value,
              year,
              transation,
            },
          },
        },
        include: {
          FinanceData: {
            select: {
              product: true,
              day: true,
              month: true,
              year: true,
              hour: true,
              minutes: true,
              payment: true,
              store: true,
              value: true,
              transation: true,
              title: true
            },
          },
          User: {
            select: {
              name: true,
            },
          },
        },
      });

      const findUserBalance = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          balance: {
            decrement: value,
          },
        },
        select: {
          balance: true,
        },
      });

      return res.json({
        message: `Nova saída adicionada, seu saldo atual é de R$ ${findUserBalance?.balance}`,
        user,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async newDeposit(req: UserRequest, res: Response) {
    const { value, transation, title } = req.body;
    const date = format(new Date(), "dd/MM/yyyy");
    const hours = format(new Date(), "HH:mm:ss");
    const [hour, minutes] = hours.split(":");
    const [day, month, year] = date.split("/");
    const userId = req.userId;

    try {

      const userBalance = await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          balance: true,
          account: true,
          email: true,
          created_At: true,
          name: true,
        },
      });

      if (!userBalance) {
        res.status(400).json({ error: "User and balance not found" });
      }
      const financeDayExist = await prisma.finance.findFirst({
        where: {
          FinanceData: {
            day, month, year
          },
          User: {
            id: userId
          }
        },
        select: {
          FinanceData: {
            select: {
              id: true
            }
          }
        }
      })
      if (financeDayExist) {
        await prisma.financeData.update({
          where: {
            id: financeDayExist.FinanceData?.id
          },
          data: {
            value: {
              increment: value
            }
          }
        })
        const findUserBalance = await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            balance: {
              increment: value,
            },
          },
          select: {
            balance: true,
            Finance: {
              select: {
                FinanceData: {
                  where: {
                    id: financeDayExist.FinanceData?.id,
                  },
                },
              },
            },
          },
        });
        console.log("financedayexist: ", financeDayExist)
        return res.status(200).json({message: `Sua carteira foi atualizada, seu saldo atual é de: R$ ${findUserBalance.balance} `, findUserBalance})
      }

      const userFinance = await prisma.finance.create({
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
              value,
              year,
              transation,
              title,
            },
          },
        },
        include: {
          FinanceData: {
            select: {
              title: true,
              day: true,
              month: true,
              year: true,
              hour: true,
              minutes: true,
              value: true,
              transation: true,
              id: true,
            },
          },
          User: {
            select: {
              name: true,
            },
          },
        },
      });

      if (!userFinance) {
        res.status(400).json({ error: "Finance not created" });
      }

      const findUserBalance = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          balance: {
            increment: value,
          },
        },
        select: {
          balance: true,
          Finance: {
            select: {
              FinanceData: {
                where: {
                  id: userFinance.FinanceData?.id,
                },
              },
            },
          },
        },
      });

      const financeUpdated = await prisma.finance.findFirst({
        where: {
          FinanceData: {
            day,
            month,
            year,
            hour,
            minutes,
            value,
            transation,
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
              transation: true,
            },
          },
        },
      });

      return res.json({
        message: `Nova entrada adicionada, seu saldo atual é de R$ ${findUserBalance?.balance}`,
        financeUpdated,
      });
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async getBalance(req: UserRequest, res: Response) {
    const userId = req.userId;

    try {
      const allBalancesByUser = await prisma.user.findFirst({
        where: {
          id: userId,
        },
        select: {
          balance: true,
        },
      });

      if (!allBalancesByUser) {
        res.status(400).json({ error: "User not found" });
      }

      res.status(200).json(allBalancesByUser);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async getExtracts(req: UserRequest, res: Response) {
    const userId = req.userId;
    try {
      const extracts = await prisma.finance.findMany({
        where: {
          User: {
            id: userId,
          },
        },
        select: {
          FinanceData: {
            select: {
              transation: true,
              day: true,
              hour: true,
              minutes: true,
              month: true,
              year: true,
              value: true,
              id: true,
              title:true,
              store:true,
              payment: true,
              product:true
            },
          },
        },
      });
      res.status(200).json(extracts);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async getTransations(req: UserRequest, res: Response) {
    const userId = req.userId;
    try {
      const { transation } = req.body;
      const allDeposits = await prisma.finance.findMany({
        where: {
          User: {
            id: userId,
          },
          FinanceData: {
            transation,
          },
        },
        select: {
          FinanceData: {
            select: {
              transation: true,
              day: true,
              hour: true,
              minutes: true,
              month: true,
              year: true,
              value: true,
              id: true,
            },
          },
        },
      });
      res.status(200).json(allDeposits);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
