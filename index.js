const express = require("express");
const helmet = require("helmet");
const cookie = require("cookie-parser");
const app = express();
const port = 3000;

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookie.parse());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
