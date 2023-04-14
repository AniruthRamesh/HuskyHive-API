import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: false,
  },
lastName: {
    type: String,
    required: false,
  },
userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isSeller: {
    type: Boolean,
    default:false
  },
address: {
    type: String,
    required: false,
  },
bio: {
    type: String,
    required: false,
  },
cardNumber: {
    type: String,
    required: false,
  },
cardHolderName: {
    type: String,
    required: false,
  },
expirationDate: {
    type: String,
    required: false,
  },
sellerName: {
    type: String,
    required: false,
  },
productsSold: {
    type: Number,
    required: false,
  },
averageResponseTime: {
    type: String,
    required: false,
  },
averageResponseTime: {
    type: String,
    required: false,
  },
memberSince: {
    type: String,
    required: false,
  },
lastDelivery: {
    type: String,
    required: false,
  },
},{
  timestamps:true
});

export default mongoose.model("User", userSchema)