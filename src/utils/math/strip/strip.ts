export function strip (value: number) {
  return parseFloat(value.toPrecision(12))
}
