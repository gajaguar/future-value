import { logBase } from '../src/log-base'

describe('logBase', () => {
  it('must be a function', () => {
    const func = logBase

    const result = typeof func

    expect(result).toMatch('function')
  })

  it('can receive strings representing numbers as parameters', () => {
    const base = '2'
    const num = '10'

    const result = logBase(base, num)

    expect(result).not.toBeNaN()
  })

  it('must calculate the log base 2 of 10', () => {
    const base = 2
    const num = 10

    const result = logBase(base, num)

    expect(result).toBeCloseTo(3.322, 3)
  })
})
