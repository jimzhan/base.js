import { http } from 'middleware';
import { regex } from 'utils';
import * as views from './views';

export const prefix = false;

const validator = http.params({
  username: regex.email,
  password: regex.password,
});

export default {
  'POST /login': [validator, views.login],
  'POST /logout': views.logout,
};
