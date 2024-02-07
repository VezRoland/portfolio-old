/*
  Warnings:

  - You are about to drop the column `host` on the `Project` table. All the data in the column will be lost.
  - The `images` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `hosted` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "host",
ADD COLUMN     "hosted" TEXT NOT NULL,
DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
