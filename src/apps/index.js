import glob from 'glob';
import path from 'path';
import Body from 'koa-body';
import Router from 'koa-router';
import settings from 'settings';

/**
 * Bootstrap automatically loads all the applications under `apps` folders
 * & registers theirs routers (if proper router presented in `<module>/index.js`).
 *
 * Format of the router in `index.js`.
 * {OPTIONAL} `export const prefix = 'URL prefix for this module or `false` to disable it'.
 * {REQUIRED}
 *  ```
 *    export default {
 *      '<HTTP METHOD> <URL PATTERN>': <View Handler>
 *    }
 *  ```
 *  @param {*} server `Koa` application instance.
 */
export default function bootstrap(server) {
  const apps = glob.sync(`${__dirname}/*`, { ignore: '**/index.js' });

  Object.values(apps).forEach((abspath) => {
    const module = require(abspath);  // eslint-disable-line
    if (!module.default) { return; }

    const routes = module.default;
    const basename = path.basename(abspath);
    const prefix = (module.prefix === false) ? undefined : (module.prefix || `/${basename}`);
    const baseUrl = prefix ? `${settings.urls.prefix}${prefix}` : `${settings.urls.prefix}`;
    const router = new Router({ prefix: baseUrl });

    Object.keys(routes).forEach((url) => {
      const views = routes[url];
      const [method, pattern] = url.split(/(\s+)/).filter(s => s.trim().length > 0);
      const body = Body();
      if (Array.isArray(views)) {
        router[method.toLowerCase()](pattern, body, ...views);
      } else {
        router[method.toLowerCase()](pattern, body, views);
      }
      server.use(router.routes()).use(router.allowedMethods());
    });
  });
}
