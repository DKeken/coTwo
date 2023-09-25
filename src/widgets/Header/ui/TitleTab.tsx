"use client";

import { ActiveDoPlate } from "@/shared/assets/ActiveDoPlate";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DOList = [
  { name: "ЗН", path: "zn" },
  { name: "РВП", path: "rvp" },
  { name: "ЗНДС - ОНО", path: "znds-ono", disabled: true },
  { name: "ЗНДС - УНГ", path: "znds-ung", disabled: true },
  { name: "ВСП", path: "vsp", disabled: true },
  { name: "Куба", path: "kuba", disabled: true },
  { name: "Андижан", path: "andizhan", disabled: true },
  { name: "УНГП", path: "ungp", disabled: true },
];

export const TitleTab = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-fit relative">
      {DOList.map((item) => (
        <Link
          href={`/${item.path}`}
          className={`h-full select-none pl-5 ${
            !item.disabled ? "hover:opacity-80" : "pointer-events-none"
          }`}
          key={item.path}
        >
          <div
            className="text-white text-[17px] font-medium absolute z-10 flex items-center justify-center relative"
            style={{ height: "calc(100% - 3px)" }}
          >
            {item.name}
          </div>
          <div className="invisible px-4">{item.name}</div>
          {(pathname.includes(item.path) || (pathname.includes('settings') && item.name === 'РВП')) && (
            <ActiveDoPlate
              className="relative top-[-113%] left-[0%]"
              style={{
                filter:
                  "drop-shadow(0px 0px 40px rgba(0, 0, 0, 0.70)) drop-shadow(0px 0px 10px #00BE37)",
              }}
            />
          )}
        </Link>
      ))}
    </div>
  );
};
