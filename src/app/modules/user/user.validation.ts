import { z } from "zod";

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string(),
    password: z.string().optional(),
    phone: z.string().min(10).optional(), // Adjust validation as per format
    role: z.enum(["admin", "user"]).default("user"),
    address: z.string().optional(),
    details: z.string().optional(),
    image: z.string().optional(),
    passwordChange: z.boolean().default(false),
    favourite: z.array(z.string()).optional(),
    followers: z.array(z.string()).optional(),
    followed: z.array(z.string()).optional(),
    verified: z.boolean().default(false),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
