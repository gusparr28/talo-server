import { Hono } from "hono";
import { logger } from "hono/logger";

import translationRoutes from "./api/routes/translation.routes";

const app = new Hono().basePath("/api");

app.use(logger());

app.route("/translate", translationRoutes);

export default app;
