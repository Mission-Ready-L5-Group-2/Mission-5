//General server dependencies
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Import your routes here
import testRoute from "./routes/testRoute.js";

//Setup Server
dotenv.config();
const app = express();

app.use(express.json());

app.use(cors());    //specify later

//Test Route
app.use("/test", testRoute);


//Create Port and Connect to MONGO
//PORT
const PORT = process.env.PORT || 5000;
//Create the server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Serving base @ http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error, "Failed DB connection");
  }); //Connect to MongoDB




