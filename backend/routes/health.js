const express = require('express');
const router = express.Router();

// return string 'OK' to indicate that the server is running
router.get('/', (req, res) => {
	res.send('Server is healthy!');
})

module.exports = router