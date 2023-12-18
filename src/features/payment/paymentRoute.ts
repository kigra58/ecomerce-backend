import {Router} from 'express';
import {userPayment  } from './paymentController';


const productRoute=Router();

productRoute.get("/payment",userPayment);

