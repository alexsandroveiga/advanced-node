export const env = {
  facebookApi: {
    cliendId: process.env.FB_CLIENT_ID ?? '',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '',
    accessToken: process.env.FB_ACCESS_TOKEN ?? ''
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'as4as84as14'
}
