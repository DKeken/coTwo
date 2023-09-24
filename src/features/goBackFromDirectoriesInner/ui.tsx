"use client";

import { $data } from "@/entities/directoriesTableMain/model";
import { BackArrowIcon } from "@/shared/assets/BackArrowIcon";
import { Typography } from "antd";
import { useUnit } from "effector-react";
import Link from "next/link";

export const GoBackFromDirectoriesInner = ({ id }: { id: string }) => {
  const data = useUnit($data);

  return (
    <div className="flex items-center gap-4 py-8 pl-1">
      <Link href={"./"}>
        <BackArrowIcon className="w-[20px]" />
      </Link>
      <div className="flex items-center gap-2">
        <Typography.Text className="text-xl text-[rgba(255,255,255,0.5)]">
          Справочник:
        </Typography.Text>
        <Typography.Text className="text-white text-xl font-normal">
          {String(data.find((item) => item.key === id)?.name || "Ошибка...")}
        </Typography.Text>
      </div>
    </div>
  );
};
