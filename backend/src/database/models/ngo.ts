import {
  Model,
  DataTypes,
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin,
  HasManyHasAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  Association,
} from "sequelize";
import sequelize from ".";
import Incident from "./incident";

class NGO extends Model {
  public id!: string;

  public name!: string;

  public email!: string;

  public whatsapp!: string;

  public city!: string;

  public fu!: string;

  public readonly createAt!: Date;

  public readonly updatedAt!: Date;

  public getIncidents!: HasManyGetAssociationsMixin<Incident>;

  public addIncident!: HasManyAddAssociationMixin<Incident, number>;

  public hasIncident!: HasManyHasAssociationMixin<Incident, number>;

  public countIncidents!: HasManyCountAssociationsMixin;

  public createIncident!: HasManyCreateAssociationMixin<Incident>;

  public readonly incidents?: Incident[];

  public static associations: {
    incidents: Association<NGO, Incident>;
  };
}

NGO.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    city: DataTypes.STRING,
    fu: DataTypes.STRING(2),
  },
  { sequelize, tableName: "ngos" }
);

NGO.hasMany(Incident, {
  sourceKey: "id",
  foreignKey: "ngoId",
  as: "incidents",
});

Incident.belongsTo(NGO, { foreignKey: "ngoId" });

export default NGO;
