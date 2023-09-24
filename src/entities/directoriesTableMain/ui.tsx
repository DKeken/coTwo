"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type DirectoriesMain } from "./model";
import { type ColumnsType } from "antd/es/table";
import Link from "next/link";

const columns: ColumnsType<DirectoriesMain> = [
  {
    title: "Название справочника",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (_, data) => (
      <Link
        href={`/settings/directories/${data.key}`}
        className={`${data.disabled ? "pointer-events-none" : ""}`}
      >
        <Typography.Text
          className="font-normal"
          style={{ color: data.disabled ? "#ffffff7c" : "#ffffff" }}
        >
          {data.name}
        </Typography.Text>
      </Link>
    ),
  },
];

export const DirectoriesTableMain = () => {
  const dataSource = useUnit($data);

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};
