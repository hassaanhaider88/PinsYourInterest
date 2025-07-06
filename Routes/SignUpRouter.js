var express = require('express');
var app = express();
var router= express.Router();
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',(req,res)=>{
        res.render('SignIn.ejs',{ IsHome: false })
});


module.exports=router;