import { interest } from '../src/interest'

describe('interest', () => {
  it('must be a function', () => {
    const func = interest

    const result = typeof func

    expect(result).toMatch('function')
  })

  it('can receive strings representing numbers as parameters', () => {
    const presentValue = '100'
    const futureValue = '120'
    const periods = '12'

    const result = interest(presentValue, futureValue, periods)

    expect(result).not.toBeNaN()
  })

  it('must set a default value if periods is not specified', () => {
    const presentValue = 100
    const futureValue = 120

    const result = interest(presentValue, futureValue)

    expect(result).not.toBeFalsy()
  })

  it('must calculate the interest rate', () => {
    const presentValue = 100
    const futureValue = 120
    const periods = 10

    const result = interest(presentValue, futureValue, periods)

    expect(result).toBeCloseTo(0.02, 2)
  })
})
