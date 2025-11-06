import Database from "../Database/index.js";

let { assignments } = Database;

export function findAssignmentsForCourse(courseId) {
  return assignments.filter((assignment) => assignment.course === courseId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  assignments = [...assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assignmentId) {
  assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
  return { status: "ok" };
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  assignments = assignments.map((a) =>
    a._id === assignmentId ? { ...a, ...assignmentUpdates } : a
  );
  return assignments.find((a) => a._id === assignmentId);
}

export function findAssignmentById(assignmentId) {
  return assignments.find((assignment) => assignment._id === assignmentId);
} 
