import { Request, Response } from "express";
import prisma from "../services/db";
//! ------------users----------------
export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
    },
  });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
};

//! ------------posts----------------
export const getPosts = async (_req: Request, res: Response) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content, published, authorId } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      content,
      published,
      authorId,
    },
  });
  res.json(post);
};

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, published, authorId } = req.body;
  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      content,
      published,
      authorId,
    },
  });
  res.json(post);
};

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
};

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
