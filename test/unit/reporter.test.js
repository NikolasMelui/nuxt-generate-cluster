import consola from 'consola'
import messaging from '../../lib/utils/messaging'
import { Reporter } from '../utils'

let reporter

jest.mock('../../lib/utils/messaging')

describe('messaging', () => {
  beforeEach(() => {
    consola.reset()
    reporter = new Reporter()
  })

  // this test is not really a test
  test('nuxt success generated msg is ignored', () => {
    reporter.superLog({
      type: 'success',
      message: 'Generated TEST'
    })

    expect(consola.success).not.toHaveBeenCalled()
  })

  test('log is received by messaging', () => {
    reporter.log({
      type: 'debug',
      message: 'Something'
    })

    expect(messaging.send).toHaveBeenCalledTimes(1)
  })
})
