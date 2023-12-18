import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { route } from "./route";

config();
const app = express();

app.use(express.json());
app.use(cors());
// app.use("/api", route);

app.listen(process.env.PORT || 4041, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
