import { wrap } from './wrap'
import type { UnknownEvent } from './wrap'
import type { GA4Event } from './events/ga4/common'

export const sendAnalyticsEvent = <
  K extends UnknownEvent = GA4Event,
  /** This generic is here so users get the IntelliSense for event type options from AnalyticsEvent */
  T extends K = K
>(
  event: T
) => {
  try {
    window.postMessage(wrap(event), window.origin)
  } catch (e) {
    // IE and Edge have a bug on postMessage inside promises.
    // Ignoring for now, will try to find a workaround that
    // makes postMessage work on those browsers.
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14719328/
    console.error(e)
  }
}
