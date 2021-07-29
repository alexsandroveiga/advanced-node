export const env = {
  facebookApi: {
    cliendId: process.env.FB_CLIENT_ID ?? '253238079698622',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '92bb457d6b57ac72978de376cd47fe9e'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? 'as4as84as14'
}
