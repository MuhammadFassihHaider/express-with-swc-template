import express, { Request, Response } from "express";
import employerRoutes from "./routes/api/todos";
import { connectDB } from "./config/connectDB";
import { getEnvironmentVariables } from "./config/environmentVariables";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
    return res.send("hello world");
});

app.use("/api/todos", employerRoutes);
const start = async () => {
    const { port } = getEnvironmentVariables();
    
    try {
        await connectDB();
        app.listen(port, () => console.log(`Listening on port: ${port}`));
    } catch (error) {
        console.log(`start-trycatch: ${error}`);
    }
};

start();
