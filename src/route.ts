import { Router } from "express";
import { productRoute } from "./features/product/productRoute";
import { paymentRoute } from "./features/payment/paymentRoute";
import { orderRoute } from "./features/order/orderRoute";
import { cartRoute } from "./features/cart/cartRoute";
import { authRoute } from "./features/auth/authRoute";

export const route = Router();

route.use("/product", productRoute);
route.use("/payment", paymentRoute);
route.use("/order", orderRoute);
route.use("/cart", cartRoute);
route.use("/auth", authRoute);
