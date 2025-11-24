import ModuleModel from "./model.js";

export async function findModulesForCourse(courseId) {
  console.log("🔍 Finding modules for course:", courseId);
  console.log("🔍 CourseId type:", typeof courseId);
  const result = await ModuleModel.find({ course: courseId.toString() });
  console.log("✅ Found modules:", result.length);
  return result;
}

export async function createModule(module) {
  delete module._id;
  return await ModuleModel.create(module);
}

export async function deleteModule(moduleId) {
  return await ModuleModel.deleteOne({ _id: moduleId });
}

export async function updateModule(moduleId, moduleUpdates) {
  return await ModuleModel.updateOne({ _id: moduleId }, { $set: moduleUpdates });
}

export async function addLessonToModule(moduleId, lesson) {
  const newLesson = { ...lesson, _id: Date.now().toString() };
  return await ModuleModel.findByIdAndUpdate(
    moduleId,
    { $push: { lessons: newLesson } },
    { new: true }
  );
}

export async function deleteLessonFromModule(moduleId, lessonId) {
  return await ModuleModel.findByIdAndUpdate(
    moduleId,
    { $pull: { lessons: { _id: lessonId } } },
    { new: true }
  );
}

export async function updateLessonInModule(moduleId, lessonId, lessonUpdates) {
  return await ModuleModel.findOneAndUpdate(
    { _id: moduleId, "lessons._id": lessonId },
    { $set: { "lessons.$": { _id: lessonId, ...lessonUpdates } } },
    { new: true }
  );
}