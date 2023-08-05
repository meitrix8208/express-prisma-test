import { Request, Response } from "express";
import prisma from "../services/db";
//! ------------profile----------------
export const getProfiles = async (_req: Request, res: Response) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
};

export const getProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await prisma.profile.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(profile);
};

export const createProfile = async (req: Request, res: Response) => {
  const { bio, userId } = req.body;
  const profile = await prisma.profile.create({
    data: {
      bio,
      userId,
    },
  });
  res.json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { bio, userId } = req.body;
  const profile = await prisma.profile.update({
    where: {
      id: Number(id),
    },
    data: {
      bio,
      userId,
    },
  });
  res.json(profile);
};

export const deleteProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = await prisma.profile.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(profile);
};
