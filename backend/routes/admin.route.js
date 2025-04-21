import express from "express";
import { adminRoute, protectRoute } from "../middlewares/auth.middleware.js";
import {
    deleteUser,
    getAllUsers,
    getUserById,
    toggleRole,
} from "../controllers/admin.controller.js";
import { getAdminAnalytics } from "../controllers/analytics.controller.js";

const router = express.Router();

// Specific routes first

router.get("/all-users", protectRoute, adminRoute, getAllUsers);

// Parameter routes last
router.get("/:id", protectRoute, adminRoute, getUserById);
router.post("/toggle-role/:id", protectRoute, adminRoute, toggleRole);
router.delete("/:id", protectRoute, adminRoute, deleteUser);

export default router;


