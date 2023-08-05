import { Router } from "express";
import {
  getProfile,
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../services/post.controllers";

const router = Router();
router.get("/profile", getProfiles);
router.get("/profile/:id", getProfile);
router.post("/profile", createProfile);
router.put("/profile/:id", updateProfile);
router.delete("/profile/:id", deleteProfile);

export default router;