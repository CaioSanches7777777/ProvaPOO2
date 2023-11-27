-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUsuario" TEXT NOT NULL,
    "idLeilao" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_idLeilao_fkey" FOREIGN KEY ("idLeilao") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idDono" TEXT NOT NULL,
    "lanceId" TEXT NOT NULL,
    CONSTRAINT "Leilao_idDono_fkey" FOREIGN KEY ("idDono") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
