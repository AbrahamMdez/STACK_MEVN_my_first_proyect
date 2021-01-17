'use strict'

const express = require('express');
const router = express.Router();

const taskController = require('../controller/taskController');

//Routes
router.get('/alltasks', taskController.showAllTasks);
router.get('/', taskController.getFormToCreateTasks);
router.post('/add', taskController.createNewTasks);
router.put('/update/:id', taskController.updateTasks);
router.get('/delete/:id', taskController.deleteTasks);

module.exports = router;