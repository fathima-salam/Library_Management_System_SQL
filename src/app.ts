import express from "express";
import path from "path";
import dotenv from "dotenv";
import db from "./Config/db";
import adminrouter from "./Routes/adminRoutes";
import methodOverride from 'method-override';

dotenv.config();

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use("/",adminrouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));