import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Tests', () => {
  let axiosClient: AxiosHttpClient
  let sut: FacebookApi

  beforeEach(() => {
    axiosClient = new AxiosHttpClient()
    sut = new FacebookApi(
      axiosClient,
      env.facebookApi.cliendId,
      env.facebookApi.clientSecret
    )
  })
  it('should return a Facebook User if token is valid', async () => {
    const fbUser = await sut.loadUser({ token: 'EAADmUZAXItr4BAP1weZA1Qdxn7BbyyOIjdkabJaU6VMcRD1rYbx78HkTtJ7u7lpaeWRueEOxnQwjlehWGEOvA8MIHZAzma2uvAU4UeBwOJBf54YCE4NdM8y2f0JZAJIW9rPi6rSZCtCl35BvfQZBg8DUeKZC9srvUlOACGrDy02dpmkoyup02e1y5EMY7kBESd60259AjSL4KDg16ohIsHf' })

    expect(fbUser).toEqual({
      facebookId: '107981304917828',
      email: 'alexsandro_wwoauev_teste@tfbnw.net',
      name: 'Alexsandro Teste'
    })
  })

  it('should return undefined if token is invalid', async () => {
    const fbUser = await sut.loadUser({ token: 'invalid' })

    expect(fbUser).toBeUndefined()
  })
})
