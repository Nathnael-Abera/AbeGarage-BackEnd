import {Router} from "express"
import {registerUser} from "../controller/user"
const router =Router();
router.route("/").get(registerUser)

export default router