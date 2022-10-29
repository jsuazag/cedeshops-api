const express = require('express');
const router = express.Router();

router.get('/', getAll);
router.post('/', create);

module.exports = router;