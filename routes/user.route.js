import express from "express";
import {findSingleUser,updateUser,deleteUser,findUserByUserName} from "../controllers/user.controller.js"

const router = express.Router();

router.get("/:id",findSingleUser)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)
router.get("/byUserName/:userName", findUserByUserName);

export default router;