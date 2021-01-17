'use strict'

const Task = require('../models/task');

const taskController = {

    getFormToCreateTasks: (req, res) => {
        res.send('Mostrado');
    },

    showAllTasks: (req, res) => {
        const task = Task.find();
        res.send('Mostradas', { task });
    },

    createNewTasks: async (req, res) => {
        const { title, description } = req.body;
        const newTask = new Task ({ title, description });
        await newTask.save();
        res.send('Realizado');
    },

    updateTasks: async (req, res) => {
        const { title, description } = req.body;
        await Task.findByIdAndUpdate(req.params.id, { title, description });
        res.send('Hecho');
    },

    deleteTasks: async (req, res) => {
        await Task.findByIdAndDelete(req.params.id);
        res.send('Borrado');
    }
};

module.exports = taskController;