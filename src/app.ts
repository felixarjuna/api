import index from "@/routes/index.route";
import tasks from "@/routes/tasks/index.tasks";

import createApp from "./lib/config.app";
import OpenAPI from "./lib/config.open-api";

const app = createApp();
OpenAPI(app);

const routes = [index, tasks] as const;

routes.forEach((route) => {
  app.route("/api", route);
});

export type AppType = (typeof routes)[number];

export default app;
