import Database from "../Database/index.js";

let { enrollments } = Database;

export function findCoursesForUser(userId) {
  const userEnrollments = enrollments.filter((e) => e.user === userId);
  const courseIds = userEnrollments.map((e) => e.course);
  const { courses } = Database;
  return courses.filter((c) => courseIds.includes(c._id));
}

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  enrollments = [...enrollments, newEnrollment];
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  enrollments = enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return { status: "ok" };
}

export function findUsersForCourse(courseId) {
  const courseEnrollments = enrollments.filter((e) => e.course === courseId);
  const userIds = courseEnrollments.map((e) => e.user);
  const { users } = Database;
  return users.filter((u) => userIds.includes(u._id));
} 
