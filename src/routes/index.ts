import { Request, Router} from 'express';


import UsersRouter from './Users';
import UsersBMIRouter from './Users/userRoutes'
import apiKeyMW from '@middleware/apiKeyHeaderValidator';
import { jwtValidator } from '@server/middleware/jwtBeaereValidator';

const router  = Router();

// http://localhost:3001/cashflow/byindex/1

router.use('/users', apiKeyMW, jwtValidator, UsersBMIRouter);
router.use('/security', apiKeyMW, UsersRouter);

export default router;

export interface WithUserRequest extends Request {
  user?: any;
}
