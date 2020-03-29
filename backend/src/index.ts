import express from "express";
import cors from "cors";

import routes from "./utils/routes";
// import sequelize from "./database/models";

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server running on port ${PORT}`);
});
