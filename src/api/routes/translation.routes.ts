import { Hono } from "hono";
import { translate } from "../controllers/translation.controller";

const translationRoutes = new Hono();

translationRoutes.post("/", translate);

export default translationRoutes;
