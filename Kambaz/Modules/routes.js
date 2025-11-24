import * as modulesDao from "./dao.js";

console.log("🚀 ModuleRoutes file loaded!");

export default function ModuleRoutes(app) {
  console.log("🔌 Registering module routes...");
  
  const findModulesForCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      console.log("📥 Route received courseId:", courseId);
      const modules = await modulesDao.findModulesForCourse(courseId);
      console.log("📤 Sending modules:", modules.length);
      console.log("📤 First module:", JSON.stringify(modules[0]));
      console.log("📤 About to send response...");
      res.status(200).json(modules);
      console.log("✅ Response sent!");
    } catch (error) {
      console.error("❌ ERROR in route:", error);
      res.status(500).json({ error: error.message });
    }
  };

  const createModule = async (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = await modulesDao.createModule(module);
    res.json(newModule);
  };

  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.json(status);
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    console.log("🔄 Updating module:", moduleId, moduleUpdates);
    
    // Update the module
    await modulesDao.updateModule(moduleId, moduleUpdates);
    
    // Fetch all modules for the course
    const allModules = await modulesDao.findModulesForCourse(moduleUpdates.course);
    
    // Find and return just the updated module
    const updatedModule = allModules.find(m => m._id.toString() === moduleId);
    
    console.log("✅ Returning updated module:", updatedModule?.name);
    res.json(updatedModule);
  };

  const addLesson = async (req, res) => {
    const { moduleId } = req.params;
    const lesson = req.body;
    const module = await modulesDao.addLessonToModule(moduleId, lesson);
    res.json(module);
  };

  const deleteLesson = async (req, res) => {
    const { moduleId, lessonId } = req.params;
    const module = await modulesDao.deleteLessonFromModule(moduleId, lessonId);
    res.json(module);
  };

  const updateLesson = async (req, res) => {
    const { moduleId, lessonId } = req.params;
    const lessonUpdates = req.body;
    const module = await modulesDao.updateLessonInModule(moduleId, lessonId, lessonUpdates);
    res.json(module);
  };

  console.log("✅ Registering GET /api/courses/:courseId/modules");
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
  app.post("/api/courses/:courseId/modules", createModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.put("/api/modules/:moduleId", updateModule);
  app.post("/api/modules/:moduleId/lessons", addLesson);
  app.delete("/api/modules/:moduleId/lessons/:lessonId", deleteLesson);
  app.put("/api/modules/:moduleId/lessons/:lessonId", updateLesson);
  console.log("✅ All module routes registered!");
}