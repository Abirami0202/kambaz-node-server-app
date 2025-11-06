import Database from "../Database/index.js";

let { modules } = Database;

export function findModulesForCourse(courseId) {
  return modules.filter((module) => module.course === courseId);
}

export function createModule(module) {
  const newModule = { ...module, _id: Date.now().toString(), lessons: [] };
  modules = [...modules, newModule];
  return newModule;
}

export function deleteModule(moduleId) {
  modules = modules.filter((module) => module._id !== moduleId);
  return { status: "ok" };
}

export function updateModule(moduleId, moduleUpdates) {
  modules = modules.map((m) =>
    m._id === moduleId ? { ...m, ...moduleUpdates } : m
  );
  return modules.find((m) => m._id === moduleId);
}

// NEW: Lesson functions
export function addLessonToModule(moduleId, lesson) {
  const newLesson = { ...lesson, _id: Date.now().toString() };
  modules = modules.map((m) => {
    if (m._id === moduleId) {
      return {
        ...m,
        lessons: [...(m.lessons || []), newLesson]
      };
    }
    return m;
  });
  const module = modules.find((m) => m._id === moduleId);
  return module;
}

export function deleteLessonFromModule(moduleId, lessonId) {
  modules = modules.map((m) => {
    if (m._id === moduleId) {
      return {
        ...m,
        lessons: m.lessons.filter((l) => l._id !== lessonId)
      };
    }
    return m;
  });
  return { status: "ok" };
}

export function updateLessonInModule(moduleId, lessonId, lessonUpdates) {
  modules = modules.map((m) => {
    if (m._id === moduleId) {
      return {
        ...m,
        lessons: m.lessons.map((l) =>
          l._id === lessonId ? { ...l, ...lessonUpdates } : l
        )
      };
    }
    return m;
  });
  const module = modules.find((m) => m._id === moduleId);
  return module;
}