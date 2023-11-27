import { PrismaClient } from '@prisma/client' 
import { create } from 'domain' 
const prisma = new PrismaClient()
import UsuarioServices from './services/UsuarioServices'

async function main() {

    const user2 = await prisma.usuario.create({
        data: {
        nome: "Nome",
        email: "nome@email.com"
        }
        })

    console.log(await UsuarioServices.ListarUsuarios)

}

main()
// O que fazer depois da promessa retornar (as queries serem enviadas)
.then(async () => {
await prisma.$disconnect()
})
// Catch para demonstrar o erro no console
.catch(async (e) => {
console.error(e)
await prisma.$disconnect()
process.exit(1)
})