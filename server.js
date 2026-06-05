const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cz', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/en', (req, res) => {
  res.sendFile(path.join(__dirname, 'en.html'));
});

app.get('/en.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'en.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ZK Nextgen website running on port ${PORT}`);
});
