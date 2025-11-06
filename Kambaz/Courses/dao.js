import Database from "../Database/index.js";

export function findAllCourses() {
  return Database.courses;
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  Database.courses = [...Database.courses, newCourse];
  return newCourse;
}

export function deleteCourse(courseId) {
  Database.courses = Database.courses.filter((course) => course._id !== courseId);
  return { status: "ok" };
}

export function updateCourse(courseId, courseUpdates) {
  Database.courses = Database.courses.map((c) =>
    c._id === courseId ? { ...c, ...courseUpdates } : c
  );
  return Database.courses.find((c) => c._id === courseId);
}