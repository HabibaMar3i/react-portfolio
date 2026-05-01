const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let isInitialized = false

function injectGtagScript() {
  if (document.getElementById('ga4-script')) {
    return
  }

  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || isInitialized) {
    return
  }

  injectGtagScript()

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
  })

  isInitialized = true
}

export function trackPageView(path = window.location.pathname) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  })
}
