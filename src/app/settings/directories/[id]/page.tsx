import { DirectoriesTable } from "@/entities/directoriesTable/ui";
import { GoBackFromDirectoriesInner } from "@/features/goBackFromDirectoriesInner/ui";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="h-full px-[22px]">
      <GoBackFromDirectoriesInner id={params.id} />
      <DirectoriesTable />
    </div>
  );
}
