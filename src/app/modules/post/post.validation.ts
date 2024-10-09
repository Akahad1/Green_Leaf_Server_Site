import { z } from "zod";

export const postValidationSchema = z.object({
  user: z.string(),
  image: z.string().optional(),
  text: z.string(),
  premium: z.boolean().optional(),
  upvote: z.number().min(0).default(0),
  downvote: z.number().min(0).default(0),
  catagory: z.enum(["Vegetables", "Flowers", "Herbs", "Fruits"], {
    required_error: "Category is required",
  }),
});

export const postValidation = {
  postValidationSchema,
};
