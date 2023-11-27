import UsuarioController from "../controllers/UsuarioController";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.get('/users', UsuarioController.ListarUsuario)

UsuarioRouter.post('/user', UsuarioController.CriarUsuario);

UsuarioRouter.put('/user', UsuarioController.AtualisarUsuario);

UsuarioRouter.delete('/user', UsuarioController.DeletarUsuario);

export default UsuarioRouter;