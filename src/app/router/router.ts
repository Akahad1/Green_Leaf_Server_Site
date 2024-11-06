import { Router } from "express";
import { userRoute } from "../modules/user/user.router";
import { postRouter } from "../modules/post/post.route";
import { commentRouter } from "../modules/comment/comment.router";
import { paymentRoute } from "../modules/payment/payment.router";

const router = Router();

const moduleRoute = [
  {
    path: "/",
    route: userRoute,
  },
  {
    path: "/post",
    route: postRouter,
  },
  {
    path: "/comment",
    route: commentRouter,
  },
  {
    path: "/payment",
    route: paymentRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
