/**
 * Calculate the interest rate of the investment.
 * @param presentValue - Current or initial value of the investment.
 * @param futureValue - Investment value after specified periods.
 * @param periods - Number of investment periods (usually months).
 * @returns - The interest rate.
 */
export const interest = (
  presentValue: number | string,
  futureValue: number | string,
  periods: number | string = 12
): number => {
  const pv = Number(presentValue)
  const fv = Number(futureValue)
  const p = Number(periods)

  return (fv / pv) ** (1 / p) - 1
}
