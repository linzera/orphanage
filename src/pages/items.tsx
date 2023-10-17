import Head from "next/head";
import { ItemTable } from "~/components/items/item-table";
import { AppBar } from "~/components/ui/app-bar";
import { Card } from "~/components/ui/card";

const Items = () => {
  return (
    <div>
      <Head>
        <title>Items - Orphanage</title>
      </Head>
      <AppBar />
      <main className="flex flex-col gap-4 p-4 pt-[88px]">
        <Card className="p-4">
          <span className="text-lg font-bold">Filtros</span>
        </Card>
        <ItemTable />
      </main>
    </div>
  );
};

export default Items;
