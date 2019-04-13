var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'Franessyafei'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Franessyafei'})
})

module.exports = router;