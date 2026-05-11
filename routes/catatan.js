const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all catatan
router.get('/', (req, res) => {
  db.query('SELECT * FROM catatan', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// ADD note
router.post('/', (req, res) => {
  const { judul, isi } = req.body;
  db.query(
    'INSERT INTO catatan (judul, isi) VALUES (?, ?)',
    [judul, isi],
    (err, result) => {
      if (err) throw err;
      res.json({ message: 'Note added' });
    }
  );
});

// UPDATE
router.put('/:id', (req, res) => {
  const { judul, isi } = req.body;
  const id = req.params.id;

  db.query(
    'UPDATE catatan SET judul=?, isi=? WHERE id=?',
    [judul, isi, id],
    (err) => {
      if (err) throw err;
      res.json({ message: 'Updated' });
    }
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM catatan WHERE id=?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Deleted' });
  });
});

module.exports = router;