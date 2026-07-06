const GTM_PLACEHOLDER_ID = 'GTM-XXXXXXX'

export const GTM_ID = import.meta.env.VITE_GTM_ID?.trim() ?? ''

export function isTrackingEnabled(): boolean {
  return GTM_ID.length > 0 && GTM_ID !== GTM_PLACEHOLDER_ID
}
