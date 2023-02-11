import { port } from "./app";
import app from "./app";
import router from "./routes/routes";
app.get("/ping", (_req, res) => {
    res.send("Hello World!");
});

app.use("/api",router );

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});