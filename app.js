const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rent Page
app.get('/rent', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'rent.html'));
});

// Lend Page
app.get('/lend', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'lend.html'));
});

// Handle Lend form POST (optional, if needed)
app.post('/lend', (req, res) => {
  // You can process form data here later
  res.send('Item submitted!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
