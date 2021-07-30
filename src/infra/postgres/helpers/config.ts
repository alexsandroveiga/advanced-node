import { ConnectionOptions } from 'typeorm'

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'ruby.db.elephantsql.com',
  port: 5432,
  username: 'cdhnwkqh',
  password: 'OYAC4cFH8-83BkjqhYRdX_MpQInSNyez',
  database: 'cdhnwkqh',
  entities: ['dist/infra/postgres/entities/index.js']
}
