"use client";

import { $data as $calculationsTableMainData } from "@/entities/calculationsTableMain/model";
import { $data as $directoriesTableMainData } from "@/entities/directoriesTableMain/model";
import { BackArrowIcon } from "@/shared/assets/BackArrowIcon";
import { Typography } from "antd";
import { useUnit } from "effector-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const GoBackFrom = ({ id }: { id: string }) => {
  const directoriesTableMainData = useUnit($directoriesTableMainData);
  const calculationsTableMainData = useUnit($calculationsTableMainData);
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4 py-8 pl-1">
      <Link href={"./"}>
        <BackArrowIcon
          className="w-[20px]"
          style={{
            fill: "#4AB5E3",
          }}
        />
      </Link>
      <div className="flex items-center gap-2">
        <Typography.Text className="text-xl text-[rgba(255,255,255,0.5)]">
          {pathname.includes("directories") && "Справочник:"}
          {pathname.includes("calculations") && "Расчеты:"}
        </Typography.Text>
        <Typography.Text className="text-white text-xl font-normal">
          {pathname.includes("directories") &&
            String(
              directoriesTableMainData.find((item) => item.key === id)?.name ||
                "Ошибка..."
            )}
          {pathname.includes("calculations") &&
            String(
              calculationsTableMainData
                .find((item) =>
                  item?.children?.find((inner) => inner.key === id)
                )
                ?.children?.find((inner) => inner.key === id)?.name ||
                "Ошибка..."
            )}
        </Typography.Text>
      </div>
    </div>
  );
};
