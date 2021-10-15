import { futureValue } from '../src/future-value'

describe('futureValue', () => {
  it('must be a function', () => {
    const func = futureValue

    const result = typeof func

    expect(result).toMatch('function')
  })

  it('can receive strings representing numbers as parameters', () => {
    const presentValue = '100'
    const interest = '0.05'
    const periods = '12'

    const result = futureValue(presentValue, interest, periods)

    expect(result).not.toBeNaN()
  })

  it('must set a default value if periods is not specified', () => {
    const presentValue = 100
    const interest = 0.05

    const result = futureValue(presentValue, interest)

    expect(result).not.toBeFalsy()
  })

  it('must calculate the future value', () => {
    const presentValue = 100
    const interest = 0.05
    const periods = 10

    const result = futureValue(presentValue, interest, periods)

    expect(result).toBeCloseTo(162.9, 1)
  })
})
