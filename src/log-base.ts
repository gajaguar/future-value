/**
 * Calculate the logarithm base n of a number.
 * @param base - The base to the logarithm.
 * @param number - Wich the logarithm will be calculated.
 * @returns - Logarithm base n.
 */
export const logBase = (base: number | string, num: number | string) => {
  const b = Number(base)
  const n = Number(num)

  return Math.log(n) / Math.log(b)
}
