import * as trpc from '@trpc/server'
import { Context } from './context'

const createRouter = () => {
  return trpc.router<Context>()
}

export default createRouter
