import express from 'express';
import {
    getAllUsers,
    getUserByUsername,
    updateUser,
    deleteUser
} from '../controllers/UserController';
import { userValidator } from '../validators/validator.class';
import { validatorHandler } from '../validators/validator.handler';
import { requireUser } from '../middlewares/Auth';

const router = express.Router();

router.get('/api/users', getAllUsers);
router.get('/api/users/:username', getUserByUsername);
router.patch(
    '/api/users',
    requireUser,
    userValidator.checkUserUpdateForm(),
    validatorHandler,
    updateUser
);
router.delete(
    '/api/users',
    requireUser,
    deleteUser
)

export default router;