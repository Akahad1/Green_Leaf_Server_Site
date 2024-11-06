import { NextFunction, Request, Response } from "express";

import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

import catchAsync from "../utils/catchAsync";
import { User } from "../modules/user/user.model";
import { TUserRole } from "../modules/user/user.interface";

const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "You have no access to this route",
      });
    }
    // invalid token
    const decoded = jwt.verify(
      token,
      config.JWT_ACCEESS_SECRET as string
    ) as JwtPayload;

    const { role, email, iat } = decoded;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "You have no access to this route",
      });
    }

    // role
    if (requiredRole && !requiredRole.includes(role)) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "You have no access to this route",
      });
    }
    req.user = decoded;
    next();
  });
};

export default auth;
