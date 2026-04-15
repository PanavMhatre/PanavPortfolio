import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import chatHandler from "./api/chat.js";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [
      react(),
      {
        name: "local-chat-api",
        configureServer(server) {
          server.middlewares.use("/api/chat", async (req, res, next) => {
            try {
              let rawBody = "";

              await new Promise<void>((resolve, reject) => {
                req.on("data", (chunk) => {
                  rawBody += chunk.toString();
                });
                req.on("end", () => resolve());
                req.on("error", reject);
              });

              req.body = rawBody;
              await chatHandler(req, res);
            } catch (error) {
              next(error);
            }
          });
        },
      },
    ],
  };
});
