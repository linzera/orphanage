import { z } from "zod";

export const SearchItemSchema = z.object({
  query: z.string().optional(),
});

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type Item = z.infer<typeof ItemSchema>;
