export function getUrl() {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      'http://localhost:3000'
    return url
}