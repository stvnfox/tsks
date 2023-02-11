import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const prisma = new PrismaClient()

export const projectsRouter = router({
  get: publicProcedure
    .query(async () => {
        return await prisma.projects.findMany()
    }),

  create: publicProcedure
    .input(
      z.object({
        id: z.number({
          required_error: "Id is required"
        }),
        title: z.string({
          required_error: "Title is required"
        }),
        description: z.string({
          required_error: "Description is required"
        })
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.projects.create({
        data: {
          id: input.id,
          title: input.title,
          description: input.description
        }
      })
    })
})