/* eslint strict: 0, no-console: 0 */
"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const globalConfig = require('./config');
const route = require('./route');
const app = express();

app.use(express.static(globalConfig.publicDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

app.listen(globalConfig.port, function () {
    console.log(`app is listening to port: ${globalConfig.port}`);
});