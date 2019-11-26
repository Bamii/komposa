// usage
/* 
  const myMiddleware = require('mw');

  myMiddleware({
    rootMiddleWares: [auth, goForth],
    path: '/',
    paths: ['/teapot', '/admin'],
    auth: {
      middleware: 'mw',
      paths: ['']
    }
  });
  // rootMiddleware => pipes the results of the middlewares(in the array) in each other. 
*/

const { is } = require('./utils');

function middleware(options) {
  const { app, rootMiddleWares, auth, baseUrl } = options;

  // root middlewares.
  for (let rm of rootMiddleWares) {
    if (is('array', rm)) {
      app.use(rm[0], rm[1]);
    } else {
      app.use(`${baseUrl}/*`, rm);
    }
  }

  // auth middleware.
  if (auth) {
    const { middleware: authMiddleware, paths: authPaths } = auth;

    for (let p of authPaths) {
      app.use(`${baseUrl}${p}`, authMiddleware)
    }
  }
}

module.exports = middleware;

