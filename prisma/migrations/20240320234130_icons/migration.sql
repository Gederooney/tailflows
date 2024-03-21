-- CreateTable
CREATE TABLE "Icon" (
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "version" DOUBLE PRECISION NOT NULL,
    "popularity" INTEGER NOT NULL,
    "codepoint" TEXT NOT NULL,
    "unsupported_families" TEXT[],
    "categories" TEXT[],
    "svg" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "viewBox" TEXT,
    "provider" TEXT NOT NULL,

    CONSTRAINT "Icon_pkey" PRIMARY KEY ("id")
);
