import * as express from "express"
import UsersCtrl from './UsersController'

const router = express.Router();

router.route('/')
    .post(UsersCtrl.createUser)
    
export default router