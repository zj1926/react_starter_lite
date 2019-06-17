/* eslint strict: 0, no-console: 0 */

import express from 'express';
import bodyParser from 'body-parser';
import route from './route';
import {
  publicDir,
  port,
  isDev,
} from './config';

const app = express();
app.use(express.static(publicDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(route);

app.listen(port, () => {
  console.log(`app(dev: ${isDev}) is listening to port: ${port}`);
});
