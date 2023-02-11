import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const prisma = new PrismaClient()

export const todoRouter = router({
  get: publicProcedure
    .input(
      z.object({
        projectId: z.number({
            required_error: "Project id is required"
        }),
      }),
    )
    .query(async ({ input }) => {
        const todos = await prisma.todos.findUnique({
          where: {
            id: input.projectId
          }
        })

      return todos
    }),
})