import * as questionsDao from "./dao.js";

export default function QuestionRoutes(app) {
  const findQuestionsForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  };

  const createQuestion = async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      quiz: quizId,
    };
    const newQuestion = await questionsDao.createQuestion(question);
    res.json(newQuestion);
  };

  const findQuestionById = async (req, res) => {
    const { questionId } = req.params;
    const question = await questionsDao.findQuestionById(questionId);
    res.json(question);
  };

  const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await questionsDao.deleteQuestion(questionId);
    res.json(status);
  };

  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const questionUpdates = req.body;
    const question = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.json(question);
  };

  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
  app.post("/api/quizzes/:quizId/questions", createQuestion);
  app.get("/api/questions/:questionId", findQuestionById);
  app.delete("/api/questions/:questionId", deleteQuestion);
  app.put("/api/questions/:questionId", updateQuestion);
}