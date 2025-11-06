import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  const deleteModule = (req, res) => {
    const { moduleId } = req.params;
    const status = modulesDao.deleteModule(moduleId);
    res.json(status);
  };

  const updateModule = (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const module = modulesDao.updateModule(moduleId, moduleUpdates);
    res.json(module);
  };

  // NEW: Add lesson to module
  const addLesson = (req, res) => {
    const { moduleId } = req.params;
    const lesson = req.body;
    const module = modulesDao.addLessonToModule(moduleId, lesson);
    res.json(module);
  };

  // NEW: Delete lesson from module
  const deleteLesson = (req, res) => {
    const { moduleId, lessonId } = req.params;
    const status = modulesDao.deleteLessonFromModule(moduleId, lessonId);
    res.json(status);
  };

  // NEW: Update lesson in module
  const updateLesson = (req, res) => {
    const { moduleId, lessonId } = req.params;
    const lessonUpdates = req.body;
    const module = modulesDao.updateLessonInModule(moduleId, lessonId, lessonUpdates);
    res.json(module);
  };

  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
  app.post("/api/modules/:moduleId/lessons", addLesson);
  app.delete("/api/modules/:moduleId/lessons/:lessonId", deleteLesson);
  app.put("/api/modules/:moduleId/lessons/:lessonId", updateLesson);
}