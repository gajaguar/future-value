/**
 * Calculate the nominal interest rate of the investment.
 * @param interest - The effective interest rate of the investment.
 * @param periods - Number of investment periods (usually months).
 * @returns - The nominal interest at the stablished period.
 */
export const nominalInterest = (
  interest: number | string,
  periods: number | string = 12
): number => {
  const i = Number(interest)
  const p = Number(periods)

  return i * p
}
