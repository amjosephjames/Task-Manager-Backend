const mongoose = require("mongoose");

const taskModel = mongoose.Schema(
  {
    taskName: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasks", taskModel);
