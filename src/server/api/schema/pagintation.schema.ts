import { z } from "zod";

export const PaginationArgsSchema = z.object({
  limit: z.number().min(1).max(100).nullish(),
  cursor: z.number().nullish(), // <-- "cursor" needs to exist, but can be any type
});

export interface Page<T> {
  items: T[];
  nextCursor: number | null;
  totalCount: number;
}
