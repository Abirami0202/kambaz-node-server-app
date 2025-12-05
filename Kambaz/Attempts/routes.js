import * as attemptsDao from "./dao.js";

export default function AttemptRoutes(app) {
  const findAttemptsForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const { userId } = req.query;
    const attempts = await attemptsDao.findAttemptsForQuiz(quizId, userId);
    res.json(attempts);
  };

  const getLatestAttempt = async (req, res) => {
    const { quizId } = req.params;
    const { userId } = req.query;
    const attempt = await attemptsDao.getLatestAttempt(quizId, userId);
    res.json(attempt);
  };

  const getAttemptCount = async (req, res) => {
    const { quizId } = req.params;
    const { userId } = req.query;
    const count = await attemptsDao.getAttemptCount(quizId, userId);
    res.json({ count });
  };

  const submitAttempt = async (req, res) => {
    const { quizId } = req.params;
    const attemptData = req.body;
    const newAttempt = await attemptsDao.createAttempt({
      ...attemptData,
      quiz: quizId,
    });
    res.json(newAttempt);
  };

  const findAttemptById = async (req, res) => {
    const { attemptId } = req.params;
    const attempt = await attemptsDao.findAttemptById(attemptId);
    res.json(attempt);
  };

  app.get("/api/quizzes/:quizId/attempts", findAttemptsForQuiz);
  app.get("/api/quizzes/:quizId/attempts/latest", getLatestAttempt);
  app.get("/api/quizzes/:quizId/attempts/count", getAttemptCount);
  app.post("/api/quizzes/:quizId/attempts", submitAttempt);
  app.get("/api/attempts/:attemptId", findAttemptById);
}