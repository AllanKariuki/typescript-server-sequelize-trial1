import { Router, Request, Response } from 'express';
import userController from '../controllers/usersController';

const router = Router();

router.post("/users", userController.createUsers);
// router.get("/users/:id", userController.getUsersById);

export default router;