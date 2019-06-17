const express = require('express');

const router = express.Router();
const ctr = require('./middleware');

router.get('/hello', ctr.hello);
router.get('/todos', ctr.todos);

module.exports = router;
