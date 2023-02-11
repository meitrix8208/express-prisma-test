import { Request, Response } from "express";
import prisma from "./db";

export const getUsers = async (_req:Request, res:Response) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

export const getUser = async (req:Request, res:Response) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });
    res.json(user);
};