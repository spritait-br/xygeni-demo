// ... existing code ...
const express = require("express");
const helmet = require("helmet");
const cookie = require("cookie-parser");
const fs = require("node:fs");
const https = require("node:https");

const app = express();
const port = 443;

// Carregar certificados SSL
const options = {
	key: fs.readFileSync("../cert/server.key"),
	cert: fs.readFileSync("../cert/server.cert"),
};

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Criar servidor HTTPS
https.createServer(options, app).listen(port, () => {
	console.log(`Servidor rodando em https://localhost:${port}`);
});
