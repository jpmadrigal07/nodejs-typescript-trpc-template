import express, { Application } from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import { createContext } from './utils/context'
import auth from './routes/auth'
import user from './routes/user'
import createRouter from './utils/router'
import config from './config'

const appRouter = createRouter().merge('auth.', auth).merge('user.', user)
export type AppRouter = typeof appRouter
const app: Application = express()
app.use(
  cors({
    origin: config.origins,
    credentials: true,
  })
)
const port = config.port
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`)
})
