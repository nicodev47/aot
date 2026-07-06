type DataLayerPayload = Record<string, unknown>

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[]
  }
}

export function pushToDataLayer(payload: DataLayerPayload): void {
  if (typeof window === 'undefined') {
    return
  }

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(payload)
}

export function trackEvent(
  eventName: string,
  params: DataLayerPayload = {}
): void {
  pushToDataLayer({
    event: eventName,
    ...params,
  })
}
