export const PLACEHOLDER_REG = /{([a-zA-Z0-9]+)}/g

export function placeholder (text: string, data: Record<string, any>): string {
  return text.replace(
    PLACEHOLDER_REG,
    (placeholder, placeholderId) => data[placeholderId] ?? placeholder,
  )
}
