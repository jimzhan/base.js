import axios from 'axios';
import logger from 'winston';

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

export async function somethingelse(params) {
  logger.debug(params);
}
