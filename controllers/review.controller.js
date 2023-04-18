import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  
  const newReview = new Review({
    userName: req.body.userName,
    userId:req.body.userId,
    gigId: req.body.gigId,
    review: req.body.review,
    star: req.body.star,
    reviewTitle:req.body.reviewTitle

  });

  try {
    //check if user has bought something from the seller.
    const savedReview = await newReview.save()
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};