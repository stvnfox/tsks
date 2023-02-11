import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const todoRouter = router({
  get: publicProcedure
    .input(
      z.object({
        projectId: z.number({
            required_error: "Project id is required"
        }),
      }),
    )
    .query(({ input }) => {
      return {
        project: `Project id: ${input.projectId}`,
      }
    }),
})