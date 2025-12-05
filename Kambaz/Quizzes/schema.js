import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: "New Quiz" },
    course: { type: String, required: true },
    description: { type: String, default: "" },
    quizType: { type: String, default: "Graded Quiz" },
    points: { type: Number, default: 0 },
    assignmentGroup: { type: String, default: "Quizzes" },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: { type: String, default: "immediately" },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: String, default: "" },
    availableDate: { type: String, default: "" },
    untilDate: { type: String, default: "" },
    published: { type: Boolean, default: false },
  },
  { collection: "quizzes" }
);

export default quizSchema;