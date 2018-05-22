const express = require('express');
const controller = require('../controllers/gallery.controller');


const router = express.Router();

router.route('/')
.post(controller.post)
.get(controller.get)

router.route('/:id')
.delete(controller.deleteOne)




module.exports= router;


