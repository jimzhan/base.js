import * as views from './views';


export default {
  'GET /': views.list,
  'GET /:id': views.get,
};
