import { Router } from "express";
import { userRoute } from "../modules/user/user.router";
import { postRouter } from "../modules/post/post.route";

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
