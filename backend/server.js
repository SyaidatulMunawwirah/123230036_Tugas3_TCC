const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const catatanRoutes = require('./routes/catatan');
app.use('/catatan', catatanRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});