import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

export default mongoose.model("Feedback", feedbackSchema);
