import logger from 'winston';

export async function login(ctx) {
  ctx.body = 'logging ...';
}

export async function logout(ctx) {
  logger.debug(ctx);
  ctx.body = 'logging out';
}
