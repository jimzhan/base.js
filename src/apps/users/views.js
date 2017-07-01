import * as services from './services';


/**
 * @api {get} /user/ Request List of Users information.
 * @apiName GetUsers 
 * @apiGroup User
 *
 * @apiSuccess {Array} List of the User.
 */
export async function list(ctx) {
  const response = await services.findUsers();
  ctx.body = response.data;
}

/**
 * @api {get} /user/:id Request User with specific id.
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Object} User.
 */
export async function get(ctx) {
  const id = ctx.params.id;
  const response = await services.findUserById(id);
  ctx.body = response.data;
}
