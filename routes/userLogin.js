var express = require('express');
var router = express.Router();

/* GET user login page. */
router.get('/', function(req, res, next) {
	res.send('Página de login');
});

module.exports = router;
