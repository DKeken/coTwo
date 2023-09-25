"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type ScopeTwo } from "./model";
import { type ColumnsType } from "antd/es/table";
import React from "react";

export const ScopeTwoTable = () => {
  const dataSource = useUnit($data);

  const columns: ColumnsType<ScopeTwo> = [
    {
      title: "Название источника",
      dataIndex: "source",
      width: 160,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">Итого</Typography.Text>
          );
        }
        return (
          <Typography.Text className="text-white">
            {data.source}
          </Typography.Text>
        );
      },
    },
    {
      title: "Название цеха/ промплощадки (номер технологической линии)",
      dataIndex: "workshopName",
      width: 150,
    },
    {
      title: "Вид приобретенной энергии",
      dataIndex: "typeOfEnergy",
      width: 130,
    },
    {
      title: "Потребление энергии, полученной от внешних генерирующих объектов",
      dataIndex: "energyConsumption",
      width: 150,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">
              {dataSource.reduce(
                (acc, obj) => acc + (obj.energyConsumption || 0),
                0
              )}
            </Typography.Text>
          );
        }
        return (
          <Typography.Text className="text-white">
            {data.energyConsumption}
          </Typography.Text>
        );
      },
    },
    {
      title: "Единицы измерения потребляемой энергии",
      dataIndex: "unitsOfMeasurement",
      width: 160,
    },
    {
      title: "Региональный коэффициент косвенных энергетических выбросов",
      dataIndex: "fuelConsumptionInEnergy",
      width: 160,
    },
    {
      title: "ВПГ, т СО2экв",
      dataIndex: "VPG",
      width: 150,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">
              {dataSource.reduce((acc, vpgObj) => acc + (vpgObj.VPG || 0), 0)}{" "}
              тонн
            </Typography.Text>
          );
        }
        return (
          <Typography.Text className="text-white">{data.VPG}</Typography.Text>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className="scopeTwoTable"
    />
  );
};
