const taskModel = require("../model/taskModel");

const createTask = async (req, res) => {
  try {
    const { taskName } = req.body;

    const task = await taskModel.create({
      taskName,
    });
    return res.status(201).json({ message: "task created", data: task });
  } catch (error) {
    console.log(error);
  }
};
const getTasks = async (req, res) => {
  try {
    const task = await taskModel.find();
    return res.status(200).json({ message: "all tasks", data: task });
  } catch (error) {
    console.log(error);
  }
};
const getTask = async (req, res) => {
  try {
    const task = await taskModel.findById(req.params.id);

    return res.status(200).json({ message: "single task", data: task });
  } catch (error) {
    console.log(error);
  }
};
const updateTask = async (req, res) => {
  try {
    const { taskName } = req.body;
    const task = await taskModel.findByIdAndUpdate(
      req.params.id,
      { taskName },
      { new: true }
    );
    return res.status(200).json({ message: `updated`, data: task });
  } catch (error) {
    console.log(error);
  }
};
const deleteTask = async (req, res) => {
  try {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: `Delete` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
