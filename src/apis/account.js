import { resource, get } from 'dekoa'

@resource('accounts')
export class Account {
  @get('/')
  async find (ctx) {
    ctx.status = 200
    ctx.body = { username: 'test@example.com' }
  }
}
