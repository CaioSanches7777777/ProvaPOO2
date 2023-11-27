import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../services/LeilaoServices";

class LeilaoController{

    constructor(){}

    async CriarLeilao(req: Request, res: Response){
        const dadosLeilao: Prisma.LeilaoCreateInput = req.body;
        
        if(dadosLeilao.id != "") {
            const newleilao = await LeilaoServices.CriarLeilao(dadosLeilao)
            res.status(200).json({
                status: 'ok',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async ListarLances(req: Request, res: Response){
        const lances = LeilaoServices.ListarLances();

        res.status(200).json({
            status: 'ok',
            lances: lances
        })
    }

    async AtualisarLeilao(req: Request, res: Response){
        res.send('Update leilao');
    }

    async DeletarLeilao(req: Request, res: Response){
        res.send('Delete leilao');
    }
}

export default new LeilaoController;