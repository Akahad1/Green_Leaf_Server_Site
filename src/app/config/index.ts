import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

console.log(process.env.PORT);
export default {
  port: process.env.PORT,
  // node_env: process.env.NODE_ENV,
  database: process.env.BD_URL,
  NODE_ENV: process.env.BD_URL,
  JWT_ACCEESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_ACCEESS_TOKEN_EXPIRE: process.env.JWT_ACCEESS_TOKEN_EXPIRE,
  JWT_REFRSH_SECRET: process.env.JWT_REFRSH_SECRET,
  JWT_REFRSH_TOKEN_EXPIRE: process.env.JWT_REFRSH_TOKEN_EXPIRE,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUND,
  cloudinary_cloud_name: process.env.CLOUD_NAME,
  cloudinary_api_key: process.env.API_KEY,
  cloudinary_api_secret: process.env.API_SECRET,

  // default_password: process.env.DEFULT_PASSWORLD,
};
