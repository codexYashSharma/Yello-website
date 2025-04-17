const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/items.json');

// GET all items
router.get('/items', (req, res) => {
  const items = JSON.parse(fs.readFileSync(dataPath));
  res.json(items);
});

// POST a new item (like Rent My Camera)
router.post('/items', (req, res) => {
  const items = JSON.parse(fs.readFileSync(dataPath));
  const newItem = req.body;
  newItem.id = Date.now();
  items.push(newItem);
  fs.writeFileSync(dataPath, JSON.stringify(items, null, 2));
  res.status(201).json({ message: 'Item added', item: newItem });
});

module.exports = router;
