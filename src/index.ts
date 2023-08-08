import "express-async-errors";
import express from "express";
import fileRoutes from "./routes/fileRoutes";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorHandler";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", fileRoutes);
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Listening on port ${port}`));
