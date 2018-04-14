let express = require('express');
let router = express.Router();
const controller = require('../controllers/package.controller');
const createRoute = require('../utils/createRoute');

createRoute(controller, router)





module.exports = router;