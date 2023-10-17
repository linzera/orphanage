import { api } from "~/utils/api";
import { DataTable } from "~/components/ui/data-table";
import { columns } from "./columns";

export const ItemTable = () => {
  const itemsQuery = api.item.getItems.useQuery(
    {
      query: "",
      limit: 20,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );

  if (itemsQuery.isLoading) return <div>Loading...</div>;
  if (itemsQuery.isError) return <div>Error</div>;

  return <DataTable columns={columns} data={itemsQuery.data.items} />;
};
