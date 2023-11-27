import LanceController from "../controllers/LanceController";
import { Router } from "express";

const LanceRouter = Router();

LanceRouter.post('/lance', LanceController.CriarLance);

LanceRouter.put('/lance', LanceController.AtualisarLance);

LanceRouter.delete('/lance', LanceController.DeletarLance);

export default LanceRouter;