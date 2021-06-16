import mongodb from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/router.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hi I'm the server");
});
app.use("/", router);
app.use("/", (req, res) => {
	res.send("Hi I'm Server");
});
const URL =
	"mongodb+srv://saumya66:1234main@cluster0.7uiud.mongodb.net/students?retryWrites=true&w=majority";
mongodb
	.connect(URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(process.env.PORT || 3000, () =>
			console.log("Server is listening on port " + process.env.PORT)
		);
	})

	.catch((err) => console.log(`Server is not running ${err}`));

mongodb.set("useFindAndModify", false);
