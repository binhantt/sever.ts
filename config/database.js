
// Ensure that the 'sequelize' package is installed
// Run: npm install sequelize

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "text"
});
 function connectDB() {

  try {
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
};

module.exports = { connection, connectDB };
