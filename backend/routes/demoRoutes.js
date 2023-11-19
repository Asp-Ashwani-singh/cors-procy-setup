import express from "express";
const demoRoutes = express.Router();
import { getAllData } from "../controllers/demoController.js";

demoRoutes.route("/demodata").get(getAllData);

export { demoRoutes };
