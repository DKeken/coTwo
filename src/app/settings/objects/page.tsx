import { ObjectsTable } from "@/entities/objectsTable/ui";
import { ConfigProvider } from "antd";

export default function Objects() {
  return (
    <main className="h-full px-[22px] pt-[39px]">
      <ObjectsTable />
    </main>
  );
}
