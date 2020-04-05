import app from "./app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server running on port ${PORT}`);
});
