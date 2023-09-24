"use client";

import { Table, Typography, Switch } from "antd";
import { type ColumnsType } from "antd/es/table";
import { $data, type Objects } from "./model";
import { useUnit } from "effector-react";
import { EditOutlined } from "@ant-design/icons";

const columns: ColumnsType<Objects> = [
  {
    title: "Выброс",
    dataIndex: "ejection",
    sorter: (a, b) => Number(a.ejection) - Number(b.ejection),
    render: (value) => <Switch checked={value} disabled/>,
  },
  {
    title: "Объект",
    dataIndex: "object",
    sorter: (a, b) => a.object.localeCompare(b.object),
  },
  {
    title: "Сфера охвата",
    dataIndex: "scope",
    sorter: (a, b) => a.scope.localeCompare(b.scope),
  },
  {
    title: "Вид топлива",
    dataIndex: "fuelType",
    sorter: (a, b) => a.fuelType.localeCompare(b.fuelType),
  },
  {
    title: "Время работы",
    dataIndex: "workTime",
    sorter: (a, b) =>
      a.workTime
        .format("DD.MM.YYYY")
        .localeCompare(b.workTime.format("DD.MM.YYYY")),
    render: (value) => (
      <Typography.Text className="text-white">
        {value.format("DD.MM.YYYY")}
      </Typography.Text>
    ),
  },
  {
    title: "Норма потребления",
    dataIndex: "rate",
    sorter: (a, b) => a.rate.value - b.rate.value,
    render: (value) => (
      <Typography.Text className="text-white">
        {value.value} {value.unit}
      </Typography.Text>
    ),
  },
  {
    render: () => <EditOutlined className="h-4 w-4 text-[#4AB5E3]" />,
    align: "right",
  },
];

export const ObjectsTable = () => {
  const dataSource = useUnit($data);

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};
