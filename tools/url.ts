export function getUrl() {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
    return url
}