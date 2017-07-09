import assert from 'assert';
import koajwt from 'koa-jwt';
import settings from 'settings';


export default function jwt(options = {}) {
  assert(
    (settings.secret && settings.secret.length === 60),
    'Application secret not found, `.env` missing?',
  );
  const config = Object.assign({}, options, {
    secret: settings.secret,
    cookie: settings.cookie.name,
  });
  return koajwt(config).unless({
    path: [
      /\/v1\/login/,
    ],
  });
}
