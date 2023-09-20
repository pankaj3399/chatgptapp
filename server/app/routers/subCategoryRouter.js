import express from 'express'
import createSubCategory from '../controllers/subCategory/createSubCategory.js';

const router = express.Router();

//routes
// router.get('/', GetCategories);
router.post('/', createSubCategory);

export default router;