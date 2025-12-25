import { Router } from 'express';
import auth from '../middlewares/auth.js';

// import all controllers
import { loginUserController, logoutController, registerUserController, verifyEmailController } from '../controllers/user.controller.js';

const userRouter = Router();

// Add routes
userRouter.post('/register', registerUserController)
userRouter.post('/verifyEmail', verifyEmailController)
userRouter.post('/login', loginUserController)
userRouter.get('/logout', auth, logoutController)

export default userRouter
