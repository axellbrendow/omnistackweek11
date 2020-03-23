import express from "express";

const app = express();

app.get("/", (req, res) =>
  res.json({ event: "Omnistack Week 11", student: "Axell Brendow" })
);

app.listen(3333);
