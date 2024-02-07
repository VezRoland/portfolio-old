-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "descr" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "github" TEXT NOT NULL,
    "host" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
