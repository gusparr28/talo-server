import app from "./app";

const port = Bun.env.PORT;

export default {
	port,
	fetch: app.fetch,
};
