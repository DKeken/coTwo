"use client";

import { SettingsRouteButton } from "@/features/settingsRoute/ui";
import { usePathname } from "next/navigation";

export const HeaderRightContent = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-[16px]">
      {!pathname.includes('settings') && (
        <div className="flex gap-4 items-center hover:opacity-50 cursor-pointer">
          <div className="text-white text-base font-normal">Рекомендации</div>
          <div className="w-9 h-9 relative">
            <div className="w-9 h-9 left-[36px] top-[36px] absolute origin-top-left -rotate-180 opacity-40 bg-gradient-to-b from-sky-400 to-sky-900 rounded border border-sky-400" />
            <div className="left-[12px] top-[5px] absolute text-white text-xl font-normal">
              4
            </div>
          </div>
        </div>
      )}
      <SettingsRouteButton />
    </div>
  );
};
