import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  // @ts-ignore
  start: {
    server: {
      preset: "cloudflare-pages",
      rollupConfig: {
        external: ["node:async_hooks"]
      },
    }
  }
});