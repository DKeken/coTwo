import Image from "next/image";

export default function Page() {
  return (
    <div className="overflow-hidden w-full h-full">
      <Image src="/mock.svg" width={1980} height={980} alt="mock" />
    </div>
  );
}
