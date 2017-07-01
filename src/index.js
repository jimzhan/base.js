import 'app-module-path/register';
import Koa from 'koa';
import logger from 'winston';
import bootstrap from './apps';
import settings from './settings';


logger.level = settings.debug ? 'debug' : 'info';

const server = new Koa();

bootstrap(server);

server.listen(settings.port, () => {
  logger.info(`Server started at port ${settings.port}`);
});

export default server;
