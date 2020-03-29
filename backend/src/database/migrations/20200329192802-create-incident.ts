import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: (queryInterface: QueryInterface, sequelize: typeof DataTypes) => {
    return queryInterface.createTable("incidents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      title: {
        type: sequelize.STRING,
      },
      description: {
        type: sequelize.STRING,
      },
      value: {
        type: sequelize.DECIMAL,
      },
      ngo_id: {
        type: sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: sequelize.DATE,
      },
    });
  },
  down: (queryInterface: QueryInterface, sequelize: typeof DataTypes) => {
    return queryInterface.dropTable("incidents");
  },
};
