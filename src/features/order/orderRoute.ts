import {Router} from 'express';
import { orderDetails, orderList } from './orderController';


const productRoute=Router();

productRoute.get("/orders",orderList);
productRoute.get("/order/:id",orderDetails);
