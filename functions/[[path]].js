export async function onRequest({ request }) {
  const url = new URL(request.url)
  const path = url.pathname

  // Skip assets and existing files
  if (path.startsWith('/assets') || path.includes('.')) {
    return fetch(request)
  }

  // Return index.html for all other paths (SPA routing)
  return fetch(new Request('/index.html', request))
}
