// idはなくて良いが、日付系は明示する必要がある
"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "tee",
          email: "tee@example.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "baru",
          email: "baru@example.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ren",
          email: "ren@example.com",
          password: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
