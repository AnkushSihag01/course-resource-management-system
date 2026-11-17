require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const Resource = mongoose.model('Resource', new mongoose.Schema({
  title: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, default: 'Notes' },
  link: { type: String, default: '' }
}, { timestamps: true }));

app.get('/api/resources', async (req, res) => {
  try {
    res.json(await Resource.find().sort({ createdAt: -1 }));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/resources', async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/resources/:id', async (req, res) => {
  try {
    const result = await Resource.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: 'Resource not found' });
    res.json({ message: 'Resource deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, '0.0.0.0', () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  });
