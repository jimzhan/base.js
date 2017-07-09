import Status from 'http-status-codes';
import * as services from './services';

const Authorization = 'Authorization';

export async function login(ctx) {
  const params = ctx.request.body;
  const user = await services.authenticate(params);
  if (user) {
    services.authorize(ctx, user);
    ctx.body = user;
  } else {
    ctx.throw(Status.UNAUTHORIZED);
  }
}

export async function logout(ctx) {
  ctx.remove(Authorization);
  ctx.status = Status.RESET_CONTENT;
}
