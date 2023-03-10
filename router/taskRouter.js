const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controller/taskController");

router.route("/create").post(createTask);
router.route("/").get(getTasks);
router.route("/:id").get(getTask);
router.route("/:id/update").patch(updateTask);
router.route("/:id/delete").delete(deleteTask);

module.exports = router;
