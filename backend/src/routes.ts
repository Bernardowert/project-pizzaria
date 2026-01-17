import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { validadeSchema } from './middlewares/validateSchema';
import { createUserSchema } from './schemas/userSchema';


const router = Router();


router.post("/users", validadeSchema(createUserSchema), new CreateUserController().handle);

// arquiteturea em camadas routes-cotroller-service, arquitetura em camadas

export {router};