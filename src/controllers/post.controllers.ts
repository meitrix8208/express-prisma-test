import { Request, Response } from "express";
import prisma from "../services/db";
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
    include: {
      author: true,
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
