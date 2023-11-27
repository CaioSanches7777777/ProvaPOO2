import LeilaoController from "../controllers/LeilaoController";
import { Router } from "express";

const LeilaoRouter = Router();

LeilaoRouter.get('/lances', LeilaoController.ListarLances)

LeilaoRouter.post('/leilao', LeilaoController.CriarLeilao);

LeilaoRouter.put('/leilao', LeilaoController.AtualisarLeilao);

LeilaoRouter.delete('/leilao', LeilaoController.DeletarLeilao);

export default LeilaoRouter;