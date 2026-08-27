var express = require('express');
var router = express.Router();

/* GET user sign-in page. */
router.get('/', function(req, res, next) {
	res.send('Página de login do usuário');
});

module.exports = router;
