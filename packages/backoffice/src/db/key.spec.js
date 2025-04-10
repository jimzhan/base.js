import { isValid } from 'ulid'
import Key from './key.js'

test('db.Key()', () => {
  const id = Key()
  expect(isValid(id)).toBeTruthy()
  expect(id.length).toBe(26)
  expect(Key() > id).toBe(true)
})
