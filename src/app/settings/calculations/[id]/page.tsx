import { ScopeMainTable } from "@/entities/scopeMainTable/ui";
import { ScopeOneTable } from "@/entities/scopeOneTable/ui";
import { ScopeThreeTable } from "@/entities/scopeThreeTable/ui";
import { ScopeTwoTable } from "@/entities/scopeTwoTable/ui";
import { GoBackFrom } from "@/features/goBackFrom/ui";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="h-full px-[22px]">
      <GoBackFrom id={params.id} />
      {params.id === "1-1" && <ScopeOneTable />}
      {params.id === "1-6" && <ScopeTwoTable />}
      {params.id === "1-8" && <ScopeThreeTable />}
      {params.id === "3" && <ScopeMainTable />}
    </div>
  );
}
