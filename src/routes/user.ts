import { z } from 'zod'
import createRouter from '../utils/router'

const user = createRouter()
  .query('get', {
    input: z
      .object({
        sample: z.string(),
      })
      .optional(),
    resolve() {
      return {
        sample: 'Joe',
        isAdmin: true,
      }
    },
  })
  .mutation('add', {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    resolve({ input }) {
      // ..
      return input
    },
  })
  .mutation('update', {
    input: z.object({
      email: z.string().email(),
      password: z.string().min(6),
    }),
    resolve({ input }) {
      // ..
      return input
    },
  })
  .mutation('delete', {
    resolve() {
      // ..
      return 'logout'
    },
  })

export default user
