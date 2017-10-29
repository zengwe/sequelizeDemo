var express = require('express');
var router  = express.Router();
var controller = require('./controllers/login');
router.get('/login',function(req,res,next){
    console.log('login middle');
    next();
},(req,res) => controller.login(req,res));
router.get('/insert',(req,res) => controller.insert(req,res));
module.exports = router;