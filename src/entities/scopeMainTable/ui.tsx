"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type ScopeTwo } from "./model";
import { type ColumnsType } from "antd/es/table";
import React from "react";

export const ScopeMainTable = () => {
  const dataSource = useUnit($data);

  const columns: ColumnsType<ScopeTwo> = [
    {
      title: "Сфера охвата",
      dataIndex: "scope",
      width: 150,
      render: (_, data) => {
        if (data?.total) {
          return data.key;
        }
        return data.scope;
      },
    },
    {
      title: "Категория",
      dataIndex: "category",
    },
    {
      title: "Общая масса выбросов парниковых газов, тонн СО2-экв",
      dataIndex: "totalMassOfGreenhouseGasEmissions",
      width: 220,
      render: (_, data) => {
        if (data?.total) {
          return 0;
        }
        return data.totalMassOfGreenhouseGasEmissions;
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className="scopeMainTable"
      style={{ width: "50%" }}
      scroll={{y: 650}}
    />
  );
};
