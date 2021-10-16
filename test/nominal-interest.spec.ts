import { nominalInterest } from '../src/nominal-interest'

describe('nominalInterest', () => {
  it('must be a function', () => {
    const func = nominalInterest

    const result = typeof func

    expect(result).toMatch('function')
  })

  it('can receive strings representing numbers as parameters', () => {
    const interest = '0.05'
    const periods = '12'

    const result = nominalInterest(interest, periods)

    expect(result).not.toBeNaN()
  })

  it('must set a default value if periods is not specified', () => {
    const interest = 0.05

    const result = nominalInterest(interest)

    expect(result).not.toBeFalsy()
  })

  it('must return a number', () => {
    const interest = 0.05
    const periods = 12
    const ni = nominalInterest(interest, periods)

    const result = typeof ni

    expect(result).toMatch('number')
  })

  it('must calculate the nominal interest rate', () => {
    const interest = 0.05
    const periods = 12

    const result = nominalInterest(interest, periods)

    expect(result).toBeCloseTo(0.6, 1)
  })
})
