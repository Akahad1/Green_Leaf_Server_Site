import { Router } from "express";
import { userRoute } from "../modules/user/user.router";
import { postRouter } from "../modules/post/post.route";
import { commentRouter } from "../modules/comment/comment.router";

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
];

moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
