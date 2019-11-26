# komposa
middleware composer (or 'manager'?) or some shit??... there's one single source of truth, so it's easy to debug when working with middlewares (i think)

## usage
```
const komposa = require('komposa');
const express = require('express');

const app = express();

...

komposa({
  app,
  baseUrl: '/',
  rootMiddleWares: [
    morgan('tiny'),
    bodyParser.urlencoded({ extended: true }),
    (q, s, n) => { debug('first middle:::'); n(); },
    express.static(path.join(__dirname, 'public')),
    ['/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))],
    ['/teaspoon/', (q, s, n) => { debug('second middle:::'); n(); }],
    [['/teaspoon/', '/teapot'], (q, s, n) => { debug('second middle:::'); n(); }],
  ],
  auth: {
    middleware: authenticate,
    paths: ['/auth/teapot']
  }
});

```