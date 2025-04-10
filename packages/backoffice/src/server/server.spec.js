import server from './server.js'

describe('server', () => {
  it('should compose a new server', async () => {
    const response = await server.inject({
      url: '/notfound',
      method: 'GET',
      payload: { foo: 'bar' }
    })
    expect(response.statusCode).toBe(404)
  })
})
