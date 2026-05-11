const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const catatanRoutes = require('./routes/catatan');
app.use('/catatan', catatanRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Catatan API - SyaidatulMunawwirah 123230036',
    endpoints: {
      'GET /catatan': 'Get all catatan',
      'POST /catatan': 'Create new catatan',
      'PUT /catatan/:id': 'Update catatan',
      'DELETE /catatan/:id': 'Delete catatan'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});