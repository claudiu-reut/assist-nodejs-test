module.exports = {
  HOST: "192.168.148.194",
  PORT: "54320",
  USER: "postgres",
  PASSWORD: "Assist123!",
  DB: "claudiu_database",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
