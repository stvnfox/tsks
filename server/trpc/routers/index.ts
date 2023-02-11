import { router } from '../trpc'
import { projectsRouter } from './projects'
import { todoRouter } from './todos'

export const appRouter = router({
  projects: projectsRouter,
  todos: todoRouter
})

// export type definition of API
export type AppRouter = typeof appRouter