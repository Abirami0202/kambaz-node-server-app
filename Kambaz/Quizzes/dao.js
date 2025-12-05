import QuizModel from "./model.js";

export async function findQuizzesForCourse(courseId) {
  return await QuizModel.find({ course: courseId.toString() }).sort({ availableDate: 1 });
}

export async function createQuiz(quiz) {
  delete quiz._id;
  return await QuizModel.create(quiz);
}

export async function deleteQuiz(quizId) {
  return await QuizModel.deleteOne({ _id: quizId });
}

export async function updateQuiz(quizId, quizUpdates) {
  return await QuizModel.findByIdAndUpdate(
    quizId,
    { $set: quizUpdates },
    { new: true }
  );
}

export async function findQuizById(quizId) {
  return await QuizModel.findById(quizId);
}