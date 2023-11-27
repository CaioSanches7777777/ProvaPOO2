import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../services/LanceServices";

class LanceController{

    constructor(){}

    async CriarLance(req: Request, res: Response){
        const dadosLance: Prisma.LanceCreateInput = req.body;
        
        if(dadosLance.id != ""){
            const newlance = await LanceServices.CriarLance(dadosLance)
            res.status(200).json({
                status: 'ok',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async AtualisarLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async DeletarLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}

export default new LanceController;