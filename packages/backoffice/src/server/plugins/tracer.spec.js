import api from '../api.js'

test('should GET Trace Id', async (t) => {
  const response = await api.get('/')
  expect(response.headers['x-trace-id']).toBeTruthy()
})
