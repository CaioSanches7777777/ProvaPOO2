import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoServices {
    constructor(){}

    async ListarLances(lance?: string, id?: string){
        try{
            if(lance) {
                const lance1 = await prisma.leilao.findUnique({
                    where: {
                        id
                    }
                });
                return lance;
            } else {
                const lances = await prisma.usuario.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async CriarLeilao(leilao: Prisma.LeilaoCreateInput){

        try{
            const novoLeilao = await prisma.leilao.create({
                data: leilao
            });
            console.log(novoLeilao);
            return novoLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    
    async AtualisarLeilao(id: string, leilao: Prisma.LeilaoUpdateInput){

        try{
            const leilaoAtualisado = await prisma.leilao.update({
                where:{
                    id
                }, data: leilao
            });
            console.log(leilaoAtualisado);
            return leilaoAtualisado;

        }catch(error){
            console.log(error);
            return null;
        }
    }


    async DeletarLeilao(id: string){
        try{
            const leilaoDeletado = await prisma.leilao.delete({
                where: {
                    id
                }
            });

            return leilaoDeletado;
        }catch(error){
            console.log(error);
            return null;
        }
    }


}

export default new LeilaoServices();