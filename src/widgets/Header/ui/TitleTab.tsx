"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const TitleTab = () => {
  const pathname = usePathname();
  const isDashboard = pathname === "/";

  return (
    <Link href={"/"} className="h-full hover:bg-sky-400">
      <div
        className="text-white text-xl font-medium flex items-center justify-center"
        style={{ height: "calc(100% - 3px)" }}
      >
        Выбросы СO2
      </div>
      <div
        className={`w-[168px] h-[3px] ${isDashboard ? "bg-sky-400" : ""}`}
      />
    </Link>
  );
};
