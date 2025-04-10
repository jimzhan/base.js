import { monotonicFactory } from 'ulid'

const monotonic = monotonicFactory()

export default () => monotonic(Date.now()).toLowerCase()
