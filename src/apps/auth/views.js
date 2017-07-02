import jwt from 'jsonwebtoken';
import Status from 'http-status-codes';
import settings from 'settings';
import * as services from './services';

const Authorization = 'Authorization';

export async function login(ctx) {
  const params = ctx.request.body;
  const user = await services.authenticate(params);
  if (user) {
    const token = jwt.sign(user, settings.secret);
    ctx.set(Authorization, `Bearer ${token}`);
    ctx.body = user;
  } else {
    ctx.throw(Status.UNAUTHORIZED);
  }
}

export async function logout(ctx) {
  ctx.remove(Authorization);
  ctx.status = Status.RESET_CONTENT;
}
