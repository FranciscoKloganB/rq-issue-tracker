export function getEnumKeys<T extends object>(e: T): Array<keyof typeof e> {
  return Object.keys(e) as Array<keyof typeof e>
}
