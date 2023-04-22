import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
  
    projectCardImg: {
      type: String,
      required: true,
    },
    pp: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    cardDesc: {
        type: String,
        required: true,
      },
    cardTitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: String,
      required: false,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: false,
    },
    features: {
      type: [String],
      required: false,
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", GigSchema);