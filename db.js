const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'catatan_app'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');

  // Auto-create table if not exists
  const createTable = `
    CREATE TABLE IF NOT EXISTS catatan (
      id INT(11) NOT NULL AUTO_INCREMENT,
      judul VARCHAR(255) DEFAULT NULL,
      isi TEXT DEFAULT NULL,
      tanggal_dibuat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) ENGINE=InnoDB
  `;
  db.query(createTable, (err) => {
    if (err) console.error('Error creating table:', err);
    else console.log('Table catatan ready');
  });
});

module.exports = db;