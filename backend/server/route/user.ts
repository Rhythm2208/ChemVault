import * as userController from '../controller/user.ts'; 
import {Router} from 'express'

const { login,signup } = userController
const router = Router();

router.post('/login', login);
router.post('/signup', signup);


export default router;