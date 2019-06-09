const express = require('express'),
  router = express.Router(),
  ctr = require("./middleware");

router.get('/hello', ctr.hello);
router.get('/todos', ctr.todos);

module.exports = router;