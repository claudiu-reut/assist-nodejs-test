module.exports = (sequelize, Sequelize) => {
  const UserPreferences = sequelize.define("userpref", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    timezone: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
  });
  return UserPreferences;
};
