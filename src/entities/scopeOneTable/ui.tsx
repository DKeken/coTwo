"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type ScopeOne } from "./model";
import { type ColumnsType } from "antd/es/table";
import React from "react";

export const ScopeOneTable = () => {
  const dataSource = useUnit($data);

  const columns: ColumnsType<ScopeOne> = [
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
      width: 220,
    },
    {
      title: "Вид топлива",
      dataIndex: "fuelType",
      width: 190,
    },
    {
      title: "Расход топлива в натуральном выражении",
      dataIndex: "fuelConsumption",
      width: 150,
    },
    {
      title: "Низшая теплота сгорания (коэфф. перевода в энергетич. ед.)",
      dataIndex: "lowCalorificValue",
      width: 220,
    },
    {
      title: "Расход топлива в энергетическом эквиваленте за период",
      dataIndex: "fuelConsumptionInEnergy",
      width: 200,
    },
    {
      title: "Коэффициент окисления топлива",
      dataIndex: "fuelOxidationFactor",
      width: 170,
    },
    {
      title: "Коэффициент выбросов СО2 от сжигания топлива",
      dataIndex: "COEmissionFactor",
      width: 190,
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
      className="scopeOneTable"
    />
  );
};
