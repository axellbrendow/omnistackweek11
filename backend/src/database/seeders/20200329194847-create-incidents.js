module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "incidents",
      [
        {
          title: "#1 Incident",
          description: "Something wrong",
          value: 100,
          ngo_id: "37eb0690-c63c-4bcb-a41e-ac50915aa91a",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("incidents", {}, {});
  },
};
