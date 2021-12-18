const express = require("express");

const taskModel = require("../models/taskModel");

const task = express.Router();

task.get("/all", (req, res) => {
  // grabs all tasks from database
  taskModel.getAllTasks().then((tasks) => {

    res.json(tasks);
  });
});

module.exports = task;