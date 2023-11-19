import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
// import net from "net";
import { demoRoutes } from "./routes/index.js";

const app = express();
app.use(cors());

app.use("/api/v1/demo", demoRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on  ${port}`);
});
