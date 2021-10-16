import { logBase } from './log-base'

/**
 * Calculate the number of investment periods (usually months).
 * @param presentValue - Current or initial value of the investment.
 * @param futureValue - The investment value after specified periods.
 * @param interest - Interest rate of the investment.
 * @returns - The required periods.
 */
export const periods = (
  presentValue: number | string,
  futureValue: number | string,
  interest: number | string
): number => {
  const pv = Number(presentValue)
  const fv = Number(futureValue)
  const i = Number(interest)
  const base = 1 + i
  const num = fv / pv

  return logBase(base, num)
}
