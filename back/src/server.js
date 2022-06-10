const express = require("express");
const morgan = require("morgan");
const serveIndex = require("serve-index");
const session = require("express-session");
const { createServer } = require("http");
const { crudity } = require("crudity");
const api = require("./api");
const upload = require("./upload");

const app = express();
const server = createServer(app);
const port = 3000;
const wwwDir = "./public";

app.use(morgan("tiny"));
app.use(
  session({
    secret: "my secret 1234!#",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use((req, res, next) => setTimeout(next, 2000));

app.use(
  "/api/articles",
  crudity(server, "articles", {
    pageSize: 100,
  })
);
app.use("/api/upload", upload);
app.use("/api", api);

app.use(express.static(wwwDir));
app.use(serveIndex(wwwDir, { icons: true }));

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
