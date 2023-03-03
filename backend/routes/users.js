import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//update new user
router.put("/:id", verifyUser, updateUser);

//delete new tw user
router.delete("/:id", verifyUser, deleteUser);

//get single tw user
router.get("/:id", verifyUser, getSingleUser);

//get all tw user
router.get("/", verifyAdmin, getAllUser);

export default router;
