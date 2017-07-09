export default {
  age: process.env.COOKIE_AGE,
  domain: process.env.COOKIE_DOMAIN,
  httpOnly: process.env.COOKIE_HTTPONLY,
  name: process.env.COOKIE_NAME || 'sid',
  path: process.env.COOKIE_PATH,
  secure: process.env.COOKIE_SECURE || true,
};
