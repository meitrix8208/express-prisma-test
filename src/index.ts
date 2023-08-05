import app, { PORT } from "./app";

app.get("/ping", (_req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
