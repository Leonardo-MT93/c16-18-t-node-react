import { Router } from 'express';
import {
	register,
	login,
	logout,
	getUsers,
} from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/users', getUsers);
export default router;
