import cors from "cors";
import express from "express";
import morgan from "morgan";
import router from "./routes/routes";
import { PORT } from "./constants/constan";


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
export default app;
export { PORT };

