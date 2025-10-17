import express from "express";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

const liveReloadServer = livereload.createServer();
liveReloadServer.watch("public");

const app = express();
app.use(connectLiveReload());
app.use(express.static("public"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});