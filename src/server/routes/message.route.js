const express = require('express');
const router = express.Router()


router.post('/', function(req, res, next){
    console.log('hitting messages', req.body.name)
    res.send('ok')
})
module.exports = router;