const express = require("express");
const musicRoutes = require("./routes/music.routes");
const db = require("./config/database.config");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.routes");

db();

const app = express();

app.use(express.static("storage"));

app.get("/", (request, response) => {
	response.json("Home");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(musicRoutes);
app.use(usersRouter);

app.listen(5000, () => {
	console.log("express escuchando por el puerto 5000");
});
