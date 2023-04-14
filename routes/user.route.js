import express from "express";
import {findSingleUser,updateUser,deleteUser} from "../controllers/user.controller.js"

const router = express.Router();

router.get("/:id",findSingleUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router;