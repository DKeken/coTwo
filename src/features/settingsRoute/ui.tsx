"use client";

import { SettingsIcon } from "@/shared/assets/SettingsIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SettingsRouteButton = () => {
  const pathname = usePathname();
  const isDashboard = pathname === "/";

  return (
    <Link href={"/settings/objects"} style={{ height: "100%" }}>
      <div
        className={`flex justify-center items-center border-l border-gray-800 h-full w-16 hover:bg-sky-400 ${
          !isDashboard ? "bg-sky-400" : ""
        }`}
      >
        <SettingsIcon />
      </div>
    </Link>
  );
};
