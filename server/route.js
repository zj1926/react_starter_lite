import express from 'express';
import {
  hello,
  todos,
} from './middleware';

const router = express.Router();

router.get('/hello', hello);
router.get('/todos', todos);

export default router;
