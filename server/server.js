
require("dotenv").config({path: "../.env"});

/* ==== External Modules ==== */
const express = require("express");

//Required for method override
const cors = require("cors");



/* ==== Instanced Modules  ==== */
const app = express();
const routes = require("./routes")


// connect to the MongoDB
require("./config/database");

/* ==== Configuration ==== */
const config = require("@learn-2-earn/config")

/* ==== Middleware ==== */
app.use(cors());
app.use(express.json());


/* ====  Routes & Controllers  ==== */
app.use("/api", routes)

app.all("/api/*", (req, res, next) =>{
	res.send("THESE ARE NOT THE APIS YOU ARE LOOKING FOR")
})


/* ====  Server Listener  ==== */
app.listen(config.PORT, () => {
	console.log(`Learn-2-Earn is live at http://localhost${config.PORT}`);
});