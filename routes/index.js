const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/community', (req, res) => res.render('community'));
router.get('/post', (req, res) => res.render('post'));

module.exports = router;
