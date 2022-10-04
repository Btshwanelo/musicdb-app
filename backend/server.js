const express = require("express");

const http = require("http");
const morgan = require("morgan");

const app = express();

const bodyParser = require("body-parser");
const port = process.env.PORT || 4040;

const server = http.createServer(app);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes"));

server.listen(port);

console.log("server is running on PORT:", `its alive on http://localhost:${port}`);
console.log("server is running...");
