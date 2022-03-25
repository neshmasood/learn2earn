require("dotenv").config({path: "../.env"});

/* ==== External Modules ==== */
const express = require("express");
// const mongoose = require("mongoose");
const path = require("path");

//Required for method override
const cors = require("cors");



/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes")


// connect to the MongoDB
require("./config/database");

/* ==== Configuration ==== */
const config = require("@learn2earn/config")

/* ==== Middleware ==== */
app.use(cors());
app.use(express.static(path.join("build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/* ====  Routes & Controllers  ==== */
app.use("/api", routes)

app.all("/api/*", (req, res, next) =>{
	res.send("THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Learn-2-Earn is live at http://localhost${config.PORT}`);
});