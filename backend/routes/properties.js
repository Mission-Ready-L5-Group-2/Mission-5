//This route is a test to explain how express router works and sending a dummy message from our mongoDB database to the frontend.
//It is also a check on the docker container to see if it is working properly.

import { Router } from "express";
import { Property } from "../models/property.js";

const propertyRouter = Router();

propertyRouter.get("/", async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})


export default propertyRouter;