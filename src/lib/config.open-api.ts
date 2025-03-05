import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types.js";

import packageJSON from "../../package.json" with { type: "json" };

export default function OpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "Battery Pass API",
      version: packageJSON.version,
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "modern",
      defaultHttpClient: {
        targetKey: "powershell",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    }),
  );
}
