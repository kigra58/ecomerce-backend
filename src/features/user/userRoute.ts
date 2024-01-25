import {Router} from 'express'
import { updateUserDetails, userDetails } from './userController';


const userRoute=Router();

/**
 * @swagger
 *  /api/user/details:
 *   get:
 *     description: get user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
userRoute.get("/:userId",userDetails)

/**
 * @swagger
 *  /api/user/update:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
userRoute.patch("/update",updateUserDetails)

/**
 * @swagger
 *  /api/user/update:
 *   get:
 *     description: get update user details
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
userRoute.get("/users",)