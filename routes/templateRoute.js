const express = require('express')
const router = express.Router();
const cors = require('cors');
const templateController = require('../controllers/templateController')
router.options('/template', cors());
router.get('/template', cors(),templateController.getTemplate)

module.exports = router