export function areAllValuesNonEmptyArray<T extends { [key: string]: any[] }>(
  object: T
): boolean {
  return Object.values(object).every(
    (value) => Array.isArray(value) && value.length > 0
  );
}
