import express from 'express'
import createCardTemp from '../controllers/cardTemp/createCardTemp.js';
import getCardTemps from '../controllers/cardTemp/getCardTemps.js';
const router = express.Router();

//routes
router.get('/', getCardTemps);
router.post('/', createCardTemp);

export default router;