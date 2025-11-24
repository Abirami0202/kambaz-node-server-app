import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    points: { type: Number, default: 100 },
    course: { type: String, required: true },
    availableFrom: String,
    availableUntil: String,
    dueDate: String,
  },
  { collection: "assignments" }
);

export default assignmentSchema; 
