import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  const findAssignmentById = (req, res) => {
    const { assignmentId } = req.params;
    const assignment = assignmentsDao.findAssignmentById(assignmentId);
    res.json(assignment);
  };

  const deleteAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const status = assignmentsDao.deleteAssignment(assignmentId);
    res.json(status);
  };

  const updateAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const assignment = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.json(assignment);
  };

  app.get("/api/assignments/:assignmentId", findAssignmentById);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment);
} 
