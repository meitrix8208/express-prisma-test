import { Router } from "express";
import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getPost,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getProfile,
    getProfiles,
    createProfile,
    updateProfile,
    deleteProfile,
} from "../services/controllers";
const router = Router();

router.post("/users", createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);

router.get("/profile", getProfile);
router.get("/profile/:id", getProfiles);
router.post("/profile", createProfile);
router.put("/profile/:id", updateProfile);
router.delete("/profile/:id", deleteProfile);

export default router;
