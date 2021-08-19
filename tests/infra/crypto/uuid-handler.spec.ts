import { UUIDGenerator } from '@/domain/contracts/gateways'

import { v4 } from 'uuid'

jest.mock('uuid')

class UuidHandler {
  uuid ({ key }: UUIDGenerator.Input): void {
    v4()
  }
}

describe('', () => {
  it('should call uuid.v4', () => {
    const sut = new UuidHandler()

    sut.uuid({ key: 'any_key' })

    expect(v4).toHaveBeenCalledTimes(1)
  })
})
