import AssignmentModel from "./model.js";

export async function findAssignmentsForCourse(courseId) {
  return await AssignmentModel.find({ course: courseId.toString() });
}

export async function createAssignment(assignment) {
  delete assignment._id;
  return await AssignmentModel.create(assignment);
}

export async function deleteAssignment(assignmentId) {
  return await AssignmentModel.deleteOne({ _id: assignmentId });
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return await AssignmentModel.findByIdAndUpdate(
    assignmentId,
    { $set: assignmentUpdates },
    { new: true }
  );
}

export async function findAssignmentById(assignmentId) {
  return await AssignmentModel.findById(assignmentId);
}