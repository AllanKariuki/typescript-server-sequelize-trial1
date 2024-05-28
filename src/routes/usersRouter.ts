import { Router, Request, Response } from 'express';
import userController from '../controllers/usersController';

const router = Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUsersById);

export default router;