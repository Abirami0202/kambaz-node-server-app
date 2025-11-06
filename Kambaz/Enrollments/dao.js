import Database from "../Database/index.js";

export function findCoursesForUser(userId) {
  console.log("=== findCoursesForUser Debug ===");
  console.log("Looking for userId:", userId);
  console.log("All enrollments:", Database.enrollments);
  
  const userEnrollments = Database.enrollments.filter((e) => e.user === userId);
  console.log("User's enrollments:", userEnrollments);
  
  const courseIds = userEnrollments.map((e) => e.course);
  console.log("Course IDs:", courseIds);
  
  const { courses } = Database;
  console.log("All courses:", courses);
  
  const foundCourses = courses.filter((c) => courseIds.includes(c._id));
  console.log("Found courses:", foundCourses);
  
  return foundCourses;
}

export function enrollUserInCourse(userId, courseId) {
  console.log("=== enrollUserInCourse Debug ===");
  console.log("Enrolling userId:", userId, "in courseId:", courseId);
  
  const newEnrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  
  Database.enrollments = [...Database.enrollments, newEnrollment];
  console.log("Updated enrollments:", Database.enrollments);
  
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return { status: "ok" };
}

export function findUsersForCourse(courseId) {
  const courseEnrollments = Database.enrollments.filter((e) => e.course === courseId);
  const userIds = courseEnrollments.map((e) => e.user);
  const { users } = Database;
  return users.filter((u) => userIds.includes(u._id));
}