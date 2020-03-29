import { Model, DataTypes } from "sequelize";
import sequelize from ".";

class Incident extends Model {
  public id!: number;

  public title!: string;

  public description!: string;

  public value!: number;

  public ngoId!: string;

  public readonly createAt!: Date;

  public readonly updatedAt!: Date;
}

Incident.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.DECIMAL,
  },
  { sequelize, tableName: "incidents" }
);

export default Incident;
