const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('actions directory')
});

module.exports = router;