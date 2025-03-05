import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";

import { createRouter } from "@/lib/config.app";

const router = createRouter().openapi(
  createRoute({
    tags: ["index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        createMessageObjectSchema("Battery Pass API"),
        "Battery Pass API Index"
      ),
    },
  }),
  (c) => {
    return c.json({ message: "Battery Pass API" }, HttpStatusCodes.OK);
  }
);

export default router;
