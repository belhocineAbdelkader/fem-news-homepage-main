/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5173;

// Serve static files
app.use(express.static(path.join(__dirname, '/src')));

// Handle other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/src', '/404.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
