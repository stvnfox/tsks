import { PrismaClient } from '@prisma/client'
import { publicProcedure, router } from '../trpc'

const prisma = new PrismaClient()

export const projectsRouter = router({
  get: publicProcedure
    .query(async () => {
        return await prisma.projects.findMany()
    }),
})