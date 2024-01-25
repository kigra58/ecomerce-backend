import express from "express";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from "./swagger";
import { config } from "dotenv";
import { routes } from "./routes";
import cors from "cors";

config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 4041, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
