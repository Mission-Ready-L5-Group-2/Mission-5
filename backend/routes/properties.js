
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