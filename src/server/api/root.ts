import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { itemsRouter } from "~/server/api/routers/items";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  item: itemsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
