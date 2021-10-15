/**
 * Calculate the current or initial value of the investment.
 * @param futureValue - Investment value after specified periods.
 * @param interest - Interest rate of the investment.
 * @param periods - Number of investment periods (usually months).
 * @returns - The investment value in the present.
 */
export const presentValue = (
  futureValue: number | string,
  interest: number | string,
  periods: number | string = 12
): number => {
  const fv = Number(futureValue)
  const i = Number(interest)
  const p = Number(periods)

  return fv / (1 + i) ** p
}
