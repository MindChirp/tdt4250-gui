import z from "zod";

export const envSchema = z.object({
  VITE_BASE_API_URL: z.string().min(1),
});
