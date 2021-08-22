const express = require('express'); //import express

// 1.
const router  = express.Router(); 
// 2.
const userController = require('../controllers/userController'); 
// 3.
router.get('/user', userController.getUser); 
// 4. 
module.exports = router; // export to use in server.js