import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    quiz: { type: String, required: true },
    user: { type: String, required: true }, // user ID
    course: { type: String, required: true },
    attemptNumber: { type: Number, default: 1 },
    score: { type: Number, default: 0 },
    answers: [
      {
        question: String, // question ID
        answer: mongoose.Schema.Types.Mixed, // can be string, boolean, or array
      }
    ],
    submittedAt: { type: Date, default: Date.now },
  },
  { collection: "attempts" }
);

export default attemptSchema;