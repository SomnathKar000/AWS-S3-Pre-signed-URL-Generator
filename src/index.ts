import epress from "express";
import fileRoutes from "./routes/fileRoutes";
import { notFound } from "./middleware/errorHandler";

const app = epress();
const port = 5000;

app.use("/api/v1", fileRoutes);
app.use(notFound);

app.listen(port, () => console.log(`Listening on port ${port}`));
