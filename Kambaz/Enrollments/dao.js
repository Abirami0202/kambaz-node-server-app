import EnrollmentModel from "./model.js";

export async function findCoursesForUser(userId) {
  const enrollments = await EnrollmentModel.find({ user: userId });
  return enrollments.map(e => e.course);
}

export async function enrollUserInCourse(userId, courseId) {
  const existingEnrollment = await EnrollmentModel.findOne({ user: userId, course: courseId });
  if (existingEnrollment) {
    return existingEnrollment;
  }
  
  const newEnrollment = await EnrollmentModel.create({ user: userId, course: courseId });
  return newEnrollment;
}

export async function unenrollUserFromCourse(userId, courseId) {
  await EnrollmentModel.deleteOne({ user: userId, course: courseId });
  return { status: "ok" };
}

export async function findUsersForCourse(courseId) {
  const enrollments = await EnrollmentModel.find({ course: courseId });
  return enrollments.map(e => e.user);
}

export async function findEnrollmentsForUser(userId) {
  return await EnrollmentModel.find({ user: userId });
}

export async function isUserEnrolledInCourse(userId, courseId) {
  const enrollment = await EnrollmentModel.findOne({ user: userId, course: courseId });
  return !!enrollment;
}