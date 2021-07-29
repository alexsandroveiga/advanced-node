import { setupMiddlewares } from '@/main/config/middlewares'

import express from 'express'
import { setupRoutes } from './routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
export { app }
