import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  vite: {
    define: {
      "process.env.VITE_API_URL": JSON.stringify(
        process.env.VITE_API_URL
      ),
    },
  },
});