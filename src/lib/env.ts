export const env = {
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined,
  contactToken: import.meta.env.VITE_CONTACT_TOKEN as string | undefined,
  analyticsDomain: (import.meta.env.VITE_ANALYTICS_DOMAIN as string | undefined) ?? 'chapu.dev',
}
