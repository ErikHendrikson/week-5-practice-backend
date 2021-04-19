"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "community watching",
          content: "such a great serie",
          imageUrl:
            "https://www.netflix-nederland.nl/wp-content/uploads/2020/03/Community-serie-Netflix.jpg",

          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "star wars watching",
          content: "cool movies",

          imageUrl:
            "https://mediad.publicbroadcasting.net/p/wuis/files/styles/x_large/public/202002/marvel-star-wars-allegiance.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 1,
        },
        {
          name: "listening to music",
          content: "mostly bob dylan",

          imageUrl:
            "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-bob-dylan-f1e9093b-a9b8-4924-9d32-325cece7c662.jpg?resize=1800,1200&w=1200",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
        {
          name: "working my ass off",
          content: "all day, all night",

          imageUrl:
            "https://miro.medium.com/max/5432/1*P5dS0A1o9ynXFC86pIexxA.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
          spaceId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
