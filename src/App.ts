import express from "express";
import cors from "cors";
import {config} from 'dotenv'

config();
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT||4041, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
