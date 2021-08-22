const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const eventController = require('../controllers/eventController'); 
// 3.
router.get('/event', eventController.getEvent); 
// 4. 
module.exports = router; // export to use in server.js