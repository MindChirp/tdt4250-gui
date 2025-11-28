// File for validating env variables
import { loadEnv } from "vite";
import z from "zod";
import { envSchema } from "./lib/envSchema";

export function validateEnvPlugin() {
  return {
    name: "validate-env",
    config(_config: any, { mode }: { mode: string }) {
      // loadEnv returns a plain object with your env vars
      const rawEnv = loadEnv(mode, process.cwd(), "");

      const parsed = envSchema.safeParse(rawEnv);

      if (!parsed.success) {
        console.error("❌ Invalid environment variables:");
        console.error(z.treeifyError(parsed.error)); // Pretty Zod output
        // Throw to prevent Vite from starting
        throw new Error(
          "Invalid environment variables. Fix them and rerun Vite."
        );
      }
    },
  };
}
