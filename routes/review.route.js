import express from "express";
import {
  createReview,
  getReviews,
  deleteReview,getUserReviews
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/send",createReview )
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview)
router.get("/user/:username",getUserReviews)

export default router;