import AttemptModel from "./model.js";

export async function findAttemptsForQuiz(quizId, userId) {
  return await AttemptModel.find({ quiz: quizId, user: userId }).sort({ submittedAt: -1 });
}

export async function getLatestAttempt(quizId, userId) {
  return await AttemptModel.findOne({ quiz: quizId, user: userId }).sort({ submittedAt: -1 });
}

export async function getAttemptCount(quizId, userId) {
  return await AttemptModel.countDocuments({ quiz: quizId, user: userId });
}

export async function createAttempt(attempt) {
  delete attempt._id;
  return await AttemptModel.create(attempt);
}

export async function findAttemptById(attemptId) {
  return await AttemptModel.findById(attemptId);
}