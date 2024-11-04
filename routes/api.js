import express from 'express';
const router = express.Router();
import * as blogController from '../app/controllers/blogController.js';

// Create Route
router.post('/create-blog', blogController.createBlog);
//Read routes
router.get('/read-blog', blogController.readBlog);
//Update routes
router.put('/update-blog', blogController.updateBlog);
//Delete routes
router.delete('/delete-blog', blogController.deleteBlog);

export default router;