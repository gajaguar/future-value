/**
 * Calculate the investment value after specified periods.
 * @param presentValue - Current or initial value of the investment.
 * @param interest - Interest rate of the investment.
 * @param periods - Number of investment periods (usually months).
 * @returns - The investment value in the future.
 */
export const futureValue = (
  presentValue: number | string,
  interest: number | string,
  periods: number | string = 12
): number => {
  const pv = Number(presentValue)
  const i = Number(interest)
  const p = Number(periods)

  return pv * (1 + i) ** p
}
