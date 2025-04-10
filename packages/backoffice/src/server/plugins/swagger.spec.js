import api from '../api.js'
import status from 'http-status'

test('GET Swagger docs', async () => {
  const response = await api.get('/docs')
  // @FIXME
  expect(response.statusCode).toBe(status.NOT_FOUND)
})
