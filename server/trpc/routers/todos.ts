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

  create: publicProcedure
    .input(
      z.object({
        id: z.number({
          required_error: "Id is required"
        }),
        created_at: z.string({
          required_error: "Date is required"
        }),
        projectId: z.number({
          required_error: "Project id is required"
        }),
        title: z.string({
          required_error: "Title is required"
        }),
        description: z.string({
          required_error: "Description is required"
        }),
        subtasks: z.string().array(),
        status: z.string({
          required_error: "Status is required"
        })
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.todos.create({
        data: {
          id: input.id,
          created_at: input.created_at,
          projectId: input.projectId,
          title: input.title,
          description: input.description,
          subtasks: input.subtasks,
          status: input.status
        }
      })
    })
})