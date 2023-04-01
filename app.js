const express = require("express");
const musicRoutes = require("./routes/music.routes");

const app = express();

const music = [
	{
		id: 1,
		name: "laura",
		author: "Damas Gratis",
	},
	{
		id: 2,
		name: "Asi era ella",
		author: "Cristian Castro",
	},
	{
		id: 3,
		name: "Muchachos",
		author: "La Mosca",
	},
];
app.get("/", (request, response) => {
	response.json("Home");
});

app.use(musicRoutes);

app.listen(5000, () => {
	console.log("express escuchando por el puerto 5000");
});

musicRoutes;
