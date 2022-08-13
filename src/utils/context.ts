import * as trpc from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export const createContext = async ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  async function getUserFromHeader() {
    if (req.headers.authorization) {
      const user = req.headers.authorization.split(' ')[1]
      return user
    }
    return null
  }
  const user = await getUserFromHeader()
  return { user, req, res }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
