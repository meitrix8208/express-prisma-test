import { Router } from "express";
import userRoutes from "./user.routes";
import postRoutes from "./post.routes";
import profileRoutes from "./profile.routes";
const router = Router();

router.use(userRoutes);
router.use(postRoutes);
router.use(profileRoutes);
export default router;
