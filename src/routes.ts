import { AccessController } from "./controller/AccessController";
import { UserController } from "./controller/UserController";
import { Router } from "express";
import { AuthMiddleware } from "./middleware/authMiddleware";
import { SessionController } from "./controller/SessionController";
import { FinanceController } from "./controller/FinanceController";
const router = Router();

const accessController = new AccessController();
const userController = new UserController();
const sessionController = new SessionController();
const financeController = new FinanceController();

router.get("/access", AuthMiddleware(["adm"]), accessController.getAll);
router.get("/users", AuthMiddleware(["adm"]), userController.getAll);
router.get("/myextracts", AuthMiddleware(["adm", "user"]), financeController.getExtracts);
router.get("/mybalance", AuthMiddleware(["adm", "user"]), financeController.getBalance);
router.get("/mytransactions", AuthMiddleware(["adm", "user"]), financeController.getTransations);

router.post("/signin", sessionController.signIn);
router.post("/newaccess", AuthMiddleware(["adm"]), accessController.create);
router.post("/user", userController.create);
router.post("/newexpense", AuthMiddleware(["adm", "user"]), financeController.newExpense); 
router.post("/newdeposit", AuthMiddleware(["adm", "user"]), financeController.newDeposit); 


export { router };
