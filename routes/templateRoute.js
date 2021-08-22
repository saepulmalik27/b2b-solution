const express = require('express')
const router = express.Router();
const templateController = require('../controllers/templateController')
router.get('/template', templateController.getTemplate)

module.exports = router