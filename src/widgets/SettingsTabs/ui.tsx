"use client";

import { AddDirectories } from "@/features/addDirectories/ui";
import { AddObject } from "@/features/addObject/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    title: "Объекты",
    path: "/objects",
  },
  {
    title: "Справочники",
    path: "/directories",
  },
  {
    title: "Расчеты",
    path: "/calculations",
  },
  {
    title: "Интеграция",
    path: "/integration",
    disabled: true,
  },
  {
    title: "Отчеты",
    path: "/reports",
    disabled: true,
  },
];

export const SettingsTabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-[22px] items-center justify-start px-6 pt-3">
      {tabs.map((tab) => {
        const tabRoute = `/settings${tab.path}`;
        const color = pathname.includes(tabRoute)
          ? "#ffffff"
          : tab.disabled
          ? "rgb(255 255 255 / 20%)"
          : "#ffffff7c";

        return (
          <Link
            key={tab.path}
            href={tabRoute}
            className={`hover:opacity-50 ${
              tab.disabled ? "pointer-events-none" : ""
            }`}
          >
            <div
              className={`h-[32px] flex items-center justify-center pb-2 ${
                pathname.includes(tabRoute) ? "border-b-2" : "border-b-0"
              }`}
              style={{ color }}
            >
              {tab.title}
            </div>
          </Link>
        );
      })}
      <div className="w-full flex justify-end">
        {pathname === "/settings/directories" && <AddDirectories />}
        {pathname === "/settings/objects" && <AddObject />}
      </div>
    </div>
  );
};
