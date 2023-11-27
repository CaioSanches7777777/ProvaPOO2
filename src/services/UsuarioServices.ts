import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioServices {
    constructor(){}

    async ListarUsuarios(id?: string){
        try{
            if(id){
                const usuario = prisma.usuario.findUnique({
                    where: {
                        id
                    }
                });
                return usuario;
            }else{
                const usuarios = prisma.usuario.findMany();
                return usuarios;
            }
        }catch(error){
        console.log(error);
        return null;
        }
    }

    async CriarUsuario(usuario: Prisma.UsuarioCreateInput){

        try{
            const novoUsuario = await prisma.usuario.create({
                data: usuario
            });
            console.log(novoUsuario);
            return novoUsuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async AtualisarUsuario(id: string, usuario: Prisma.UsuarioUpdateInput){
        try{
            const usuarioAtualisado = await prisma.usuario.update({
                where: {
                    id
                }, data: usuario
            });

            return usuarioAtualisado;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    
    async DeletarUsuario(id: string){
        try{
            const usuarioDeletado = await prisma.usuario.delete({
                where: {
                    id
                }
            });

            return usuarioDeletado;
        }catch(error){
            console.log(error);
            return null;
        }
    }

}

export default new UsuarioServices();