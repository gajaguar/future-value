import { futureValue } from '../src'
import { interest } from '../src'
import { nominalInterest } from '../src'
import { periods } from '../src'
import { presentValue } from '../src'

describe('index', () => {
  it('can export futureValue', () => {
    expect(futureValue).toBeTruthy()
  })

  it('can export interest', () => {
    expect(interest).toBeTruthy()
  })

  it('can export nominalInterest', () => {
    expect(nominalInterest).toBeTruthy()
  })

  it('can export periods', () => {
    expect(periods).toBeTruthy()
  })

  it('can export presentValue', () => {
    expect(presentValue).toBeTruthy()
  })
})
