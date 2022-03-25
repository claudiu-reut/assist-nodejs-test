module.exports = (sequelize, Sequelize) => {
  const Club = sequelize.define("clubs", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    address: {
      type: Sequelize.STRING,
    },
    owner: {
      type: Sequelize.STRING,
    },
  });
  return Club;
};
