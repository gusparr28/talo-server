import { Hono } from "hono";
import { translate } from "../controllers/translate.controller";

const translateRoutes = new Hono();

translateRoutes.post("/", translate);

export default translateRoutes;
