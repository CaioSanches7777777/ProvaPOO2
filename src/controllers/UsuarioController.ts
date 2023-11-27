import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioServices from "../services/UsuarioServices";

class UsuarioController{

    constructor(){}

    async CriarUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.nome !== ""){
            const newuser = await UsuarioServices.CriarUsuario(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newuser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async ListarUsuario(req: Request, res: Response){
        const users = await UsuarioServices.ListarUsuarios()
        console.log(users);
        res.render('users', { users: users })
    }

    async AtualisarUsuario(req: Request, res: Response){
        res.send('Update user');
    }

    async DeletarUsuario(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UsuarioController;