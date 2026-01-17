import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';


const router = Router();


router.post("/users", new CreateUserController().handle);

// arquiteturea em camadas routes-cotroller-service, arquitetura em camadas

export {router};