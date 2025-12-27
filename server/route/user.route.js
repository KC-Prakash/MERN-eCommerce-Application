import { Router } from 'express';
import auth from '../middlewares/auth.js';
import upload from '../middlewares/multer.js';

// import all controllers
import { loginUserController, logoutController, registerUserController, removeImageFromCloudinary, updateUserDetails, userAvatarController, verifyEmailController } from '../controllers/user.controller.js';

const userRouter = Router();

// Add routes
userRouter.post('/register', registerUserController)
userRouter.post('/verifyEmail', verifyEmailController)
userRouter.post('/login', loginUserController)
userRouter.get('/logout', auth, logoutController)
userRouter.put('/user-avatar', auth, upload.array('avatar'), userAvatarController)
userRouter.delete('/deleteImage', auth, removeImageFromCloudinary)
userRouter.put('/:id', auth, updateUserDetails)

export default userRouter
