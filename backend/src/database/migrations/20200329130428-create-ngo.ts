import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: (queryInterface: QueryInterface, sequelize: typeof DataTypes) => {
    return queryInterface.createTable("ngos", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.STRING,
      },
      name: {
        type: sequelize.STRING,
      },
      email: {
        type: sequelize.STRING,
      },
      whatsapp: {
        type: sequelize.STRING,
      },
      city: {
        type: sequelize.STRING,
      },
      uf: {
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
    return queryInterface.dropTable("ngos");
  },
};
