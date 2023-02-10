const express = require('express');
const app = express();

app.get('/tasks', (req, res) => {
  const tasks = ['Task1', 'Task2', 'Task3'];
  res.json({ tasks });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});