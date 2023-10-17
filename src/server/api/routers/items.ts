import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  type Page,
  PaginationArgsSchema,
} from "~/server/api/schema/pagintation.schema";
import { type Item, SearchItemSchema } from "~/server/api/schema/items.schema";
import axios from "axios";

const apiURL = "https://pokeapi.co/api/v2/pokemon";

type Result = {
  count: number;
  next: string;
  previous: string;
  results: { name: string; url: string }[];
};

export const itemsRouter = createTRPCRouter({
  getItems: publicProcedure
    .input(PaginationArgsSchema.merge(SearchItemSchema))
    .query<Page<Item>>(async () => {
      const res = await axios.get<Result>(apiURL);

      if (!res.data) {
        throw new Error("No data");
      }

      return {
        items: res.data.results.map((item) => ({
          id: item.name,
          name: item.name,
        })),
        nextCursor: null,
        totalCount: res.data.count,
      };
    }),
});
