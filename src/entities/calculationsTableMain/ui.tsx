"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type CalculationsMain } from "./model";
import { type ColumnsType } from "antd/es/table";
import { BackArrowIcon } from "@/shared/assets/BackArrowIcon";
import Link from "next/link";

const columns: ColumnsType<CalculationsMain> = [
  {
    title: "Год",
    dataIndex: "year",
    width: 80,
  },
  {
    title: "Название расчета",
    dataIndex: "name",
    render: (_, data) => {
      if (data?.inner) {
        return (
          <Link
            href={`/settings/calculations/${data.key}`}
            style={{ pointerEvents: data.disabled ? "none" : "all" }}
          >
            <div
              className="flex items-center gap-3"
              style={{ cursor: data.disabled ? "default" : "pointer" }}
            >
              <BackArrowIcon
                style={{
                  transform: "rotate(180deg)",
                  fill: data?.arrowColor || "#4AB5E3",
                  opacity: data.disabled ? 0.3 : 1,
                }}
              />
              <Typography.Text
                className={`text-white ${
                  data.disabled ? "text-opacity-40" : ""
                }`}
              >
                {data.name}
              </Typography.Text>
            </div>
          </Link>
        );
      }
      return (
        <Link
          href={`/settings/calculations/${data.key}`}
          style={{ pointerEvents: data.disabled ? "none" : "all" }}
        >
          <Typography.Text className="text-white">{data.name}</Typography.Text>
        </Link>
      );
    },
  },
];

export const CalculationsTableMain = () => {
  const dataSource = useUnit($data);

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      defaultExpandAllRows
      className="calculationsTable"
    />
  );
};
