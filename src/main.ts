import express, { Request, Response } from "express";
import employerRoutes from "./routes/api/todos";
import { config } from "./config/config";

export const _config = config();
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
    return res.send("hello world");
});

app.use("/api/todos", employerRoutes);

app.listen(_config.port);
