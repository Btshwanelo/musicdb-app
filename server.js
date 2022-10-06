const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", require("./backend/routes"));

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
