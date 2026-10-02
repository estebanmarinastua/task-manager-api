require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./src/routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({
    status: 'API running successfully ✅',
    app: 'task-manager-api',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/tasks', tasksRoutes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;
