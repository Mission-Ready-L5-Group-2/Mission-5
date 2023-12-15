import mongoose from "mongoose";
import { Property } from "../models/property.js";
import { program } from "commander";
import dotenv from "dotenv";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const data = require("./properties.json")


dotenv.config();

const uri = "mongodb://mongo-db:27017/properties_db";

// Connect to MongoDB using Mongoose
mongoose.connect(uri);

// Function to seed data using Mongoose
async function seedData(data) {
  try {
    // Drop existing data before seeding
    await Property.deleteMany();

    // Insert new data
    await Property.insertMany(data);

    console.log("Data seeded successfully!");
  } catch (err) {
    console.log(err);
  } finally {
    // Close the Mongoose connection
    mongoose.connection.close();
  }
}

// CLI command to seed data
program
  .command("seed")
  .description("Seed data into the MongoDB database")
  .action(() => {
    seedData(data);
  });

// Parse the CLI commands
program.parse(process.argv);
