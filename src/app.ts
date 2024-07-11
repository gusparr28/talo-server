import { Hono } from "hono";
import { logger } from "hono/logger";

import translateRoutes from "./infrastructure/api/routes/translate.route";

const apiVersion = Bun.env.API_VERSION;

const app = new Hono().basePath(`/api/${apiVersion}`);

app.use(logger());

app.route("/translate", translateRoutes);

export default app;
