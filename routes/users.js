var express = require('express');
var router = express.Router();
// var bodyParser = require('../node_modules/body-parser')

/*
app.js 頁面的
  app.set('views', path.join(__dirname, 'views'));
  已經讓這業的render可以直接連到 views 裡面

  app.use(express.static(path.join(__dirname, 'public')));
  亦使views中的 .ejs 能直接從 public 使用檔案
*/

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/like', function(req, res){
  res.render('like')
})

module.exports = router;
