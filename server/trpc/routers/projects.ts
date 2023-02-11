import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const projectsRouter = router({
  get: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
})