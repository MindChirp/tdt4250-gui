import { envSchema } from "./envSchema";

console.log(import.meta.env.BASE_API_URL);

const env = envSchema.parse(import.meta.env);

export default env;
