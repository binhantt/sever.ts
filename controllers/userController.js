const { connection } = require('../config/database');

exports.getAllUsers = (req, res) => {
  connection.query('SELECT id,name  FROM db_users', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
      return;
    }
    res.json(results);
  });
};