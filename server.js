const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

const items = [];

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));
app.get('/rent', (req, res) => res.sendFile(__dirname + '/views/rent.html'));
app.get('/lend', (req, res) => res.sendFile(__dirname + '/views/lend.html'));

app.post('/lend', upload.single('image'), (req, res) => {
  const { name, category, description, price, rating, available } = req.body;
  const image = req.file.filename;

  items.push({ name, category, description, price, rating, available, image });
  res.redirect('/rent?success=1');
});

app.get('/api/items', (req, res) => {
  const category = req.query.category;
  const filtered = items.filter(item => item.category === category);
  res.json(filtered);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
