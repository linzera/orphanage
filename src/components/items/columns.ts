import type { ColumnDef } from "@tanstack/react-table";
import type { Item } from "~/server/api/schema/items.schema";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
];
