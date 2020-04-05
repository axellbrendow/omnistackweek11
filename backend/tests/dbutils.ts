import { spawn } from "child-process-promise";

export const undoMigrations = () =>
  spawn("npx", ["sequelize-cli", "db:migrate:undo:all"]);

export const migrate = () => spawn("npx", ["sequelize-cli", "db:migrate"]);
