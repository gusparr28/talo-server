import app from "./app";

const port = Bun.env.PORT || 3001;

const server = Bun.serve({
	port,
	fetch: app.fetch,
});

console.log("server running on port:", server.port);
