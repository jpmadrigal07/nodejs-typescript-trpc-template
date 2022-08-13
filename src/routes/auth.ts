import { z } from 'zod'
import createRouter from '../utils/router'

const auth = createRouter()
  .query('me', {
    output: z.object({
      name: z.string(),
    }),
    resolve() {
      // ..
      return {
        name: 'John Doe',
      }
    },
  })
  .mutation('login', {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    resolve({ input }) {
      // ..
      return input
    },
  })
  .mutation('logout', {
    resolve() {
      // ..
      return 'logout'
    },
  })

export default auth
