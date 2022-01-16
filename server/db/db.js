const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/messenger",
  {
    logging: false,
  }
);

try {
  db.authenticate();
  console.log("Connection has been established successfully");
} catch (error) {
  console.error("Unable to connect to database");
}

module.exports = db;
