import Database from "../Database/index.js";

let { courses } = Database;

export function findAllCourses() {
  return courses;
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() };
  courses = [...courses, newCourse];
  return newCourse;
}

export function deleteCourse(courseId) {
  courses = courses.filter((course) => course._id !== courseId);
  return { status: "ok" };
}

export function updateCourse(courseId, courseUpdates) {
  courses = courses.map((c) =>
    c._id === courseId ? { ...c, ...courseUpdates } : c
  );
  return courses.find((c) => c._id === courseId);
}