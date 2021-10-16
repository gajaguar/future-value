import { periods } from '../src/periods'

describe('periods', () => {
  it('must be a function', () => {
    const func = periods

    const result = typeof func

    expect(result).toMatch('function')
  })

  it('can receive strings representing numbers as parameters', () => {
    const presentValue = '100'
    const futureValue = '120'
    const interest = '0.05'

    const result = periods(presentValue, futureValue, interest)

    expect(result).not.toBeNaN()
  })

  it('must calculate the periods', () => {
    const presentValue = 100
    const futureValue = 120
    const interest = 0.05

    const result = periods(presentValue, futureValue, interest)

    expect(result).toBeCloseTo(3.74, 2)
  })
})
