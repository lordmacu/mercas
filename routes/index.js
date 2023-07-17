var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async  function  (req, res, next) {
    var products ={};
    var pagination ={};
    const response = await axios.post(
		`https://merkacol.com/20-frutas?from-xhr&`
	);
 
    products = response.data.products;
    pagination = response.data.pagination;
 
console.log(pagination);
 
  res.render('index', { title: 'Express' }); 
});

module.exports = router;
