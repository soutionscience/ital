let express = require('express');
let router = express.Router();
const controller = require('../controllers/upload.controller');

router.route('/')
.post(controller.post)




module.exports = router;