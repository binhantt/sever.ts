const { connection } = require('../config/database');

exports.getAllProducts = (req, res) => {
  connection.query('SELECT id   FROM db_products', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error fetching users' });
      return;
    }
    res.json(results);
  });
};