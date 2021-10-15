import { presentValue } from '../src/present-value'

describe('presentValue', () => {
  it('must be a function', () => {
    const func = presentValue

    const result = typeof func

    expect(result).toMatch('function')
  })

  it('can receive strings representing numbers as parameters', () => {
    const futureValue = '100'
    const interest = '0.05'
    const periods = '12'

    const result = presentValue(futureValue, interest, periods)

    expect(result).not.toBeNaN()
  })

  it('must set a default value if periods is not specified', () => {
    const futureValue = 100
    const interest = 0.05

    const result = presentValue(futureValue, interest)

    expect(result).not.toBeFalsy()
  })

  it('must calculate the present value', () => {
    const futureValue = 100
    const interest = 0.05
    const periods = 10

    const result = presentValue(futureValue, interest, periods)

    expect(result).toBeCloseTo(61.4, 1)
  })
})
