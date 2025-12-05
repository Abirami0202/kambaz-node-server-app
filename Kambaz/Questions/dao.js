import QuestionModel from "./model.js";

export async function findQuestionsForQuiz(quizId) {
  return await QuestionModel.find({ quiz: quizId.toString() });
}

export async function createQuestion(question) {
  delete question._id;
  return await QuestionModel.create(question);
}

export async function deleteQuestion(questionId) {
  return await QuestionModel.deleteOne({ _id: questionId });
}

export async function updateQuestion(questionId, questionUpdates) {
  return await QuestionModel.findByIdAndUpdate(
    questionId,
    { $set: questionUpdates },
    { new: true }
  );
}

export async function findQuestionById(questionId) {
  return await QuestionModel.findById(questionId);
}