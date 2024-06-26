import { Router } from "express";
import { productRoute } from "./features/product/productRoute";
import { paymentRoute } from "./features/payment/paymentRoute";
import { orderRoute } from "./features/order/orderRoute";
import { cartRoute } from "./features/cart/cartRoute";
import { authRoute } from "./features/auth/authRoute";
import { userRoute } from "./features/user/userRoute";
import { categoryRoute } from "./features/category/categoryRoute";

export const routes = Router();

routes.use("/product", productRoute);
routes.use("/category", categoryRoute);
routes.use("/payment", paymentRoute);
routes.use("/order", orderRoute);
routes.use("/cart", cartRoute);
routes.use("/auth", authRoute);
routes.use("/user", userRoute);
