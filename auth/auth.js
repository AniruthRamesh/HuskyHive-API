import express from "express"
import { register,login,logout,userProfile } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
router.get("/profile",userProfile)

export default router