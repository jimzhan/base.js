import axios from 'axios';
import jwt from 'jsonwebtoken';
import Status from 'http-status-codes';
import settings from 'settings';

const endpoint = 'https://jsonplaceholder.typicode.com/users';

// Sample Services.
export async function authenticate(params) {
  const username = params.username;
  const password = params.password;
  const response = await axios.get(endpoint);
  const users = response.data;
  const result = users.find(user => user.email === username && user.username === password);
  return (Array.isArray(result) && result.length === 1) ? result[0] : result;
}

/**
 * Authorize the authenticated user by issuing access token back to cookie. 
 * @param {Object} ctx koa context.
 * @param {Object} user plain JS object for creating access token.
 */
export async function authorize(ctx, user) {
  const token = jwt.sign(user, settings.secret);
  ctx.cookies.set(settings.cookie.name, token);
  ctx.status = Status.RESET_CONTENT;
}
