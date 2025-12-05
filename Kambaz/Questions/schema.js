import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    quiz: { type: String, required: true },
    title: { type: String, default: "Question" },
    type: { 
      type: String, 
      enum: ["multiple-choice", "true-false", "fill-in-blank"],
      default: "multiple-choice" 
    },
    points: { type: Number, default: 1 },
    question: { type: String, default: "" },
    // For multiple choice and fill in blank
    choices: [
      {
        text: String,
        isCorrect: Boolean,
      }
    ],
    // For true/false
    correctAnswer: { type: Boolean, default: true },
  },
  { collection: "questions" }
);

export default questionSchema;