import { DirectoriesTable } from "@/entities/directoriesTable/ui";
import { GoBackFrom } from "@/features/goBackFrom/ui";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="h-full px-[22px]">
      <GoBackFrom id={params.id} />
      <DirectoriesTable />
    </div>
  );
}
