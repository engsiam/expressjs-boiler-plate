import express from 'express';
const router = express.Router();
import * as TaskController from '../app/controllers/TaskControllers.js';

//Create routes
router.post('/createTask', TaskController.createTask);
//Read routes
router.get('/updateTask', TaskController.updateTask);
//Update routes
router.put('/updateTask', TaskController.updateTask);
//Delete routes
router.delete('/deleteTask', TaskController.deleteTask);

export default router;