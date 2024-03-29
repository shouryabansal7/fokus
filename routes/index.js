const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

//further routes linked to main index.js
router.get('/',homeController.home);
router.post('/task-create',homeController.create);
router.post('/task-complete',homeController.complete);
router.get('/task-delete/:id',homeController.delete);


module.exports = router;