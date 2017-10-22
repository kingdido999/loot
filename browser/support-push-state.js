function supportPushState () {
  return typeof window !== 'undefined' &&
  window.history &&
  window.history.pushState &&
  window.history.replaceState &&
  // pushState isn’t reliable on iOS until 5.
  !navigator.userAgent.match(
    /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
  )
}