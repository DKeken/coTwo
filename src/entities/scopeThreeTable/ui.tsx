"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type ScopeTwo } from "./model";
import { type ColumnsType } from "antd/es/table";
import React from "react";

export const ScopeThreeTable = () => {
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
      title: "ВПГ, т СО2экв",
      dataIndex: "VPG",
      width: 150,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">
              {dataSource.reduce((acc, obj) => acc + (obj.VPG || 0), 0)} тонн
            </Typography.Text>
          );
        }
        return (
          <Typography.Text className="text-white">{data.VPG}</Typography.Text>
        );
      },
    },
    {
      title: "Стоимость приобретенного товара, услуги, по видам, долл. США",
      dataIndex: "costOfPurchasedGoods",
      width: 130,
      render: (_, data) => {
        if (data?.total) {
          return (
            <Typography.Text className="text-white">
              {dataSource.reduce(
                (acc, obj) => acc + (obj.costOfPurchasedGoods || 0),
                0
              )}{" "}
              USD
            </Typography.Text>
          );
        }
        return (
          <Typography.Text className="text-white">
            {data.costOfPurchasedGoods} USD
          </Typography.Text>
        );
      },
    },
    {
      title:
        "Коэффициент выбросов на единицу приобретенных товаров, услуг, на единицу затраченных денежных средств, кгСО2-экв/долл. США.",
      dataIndex: "emissionFactor",
      width: 150,
    },
    {
      title: "Стоимость приобретенного средства по видам, долл. США",
      dataIndex: "costOfTheAcquired",
      width: 160,
      render: (_, data) => {
        if (!data?.total) {
          return (
            <Typography.Text className="text-white">
              {data.costOfTheAcquired} USD
            </Typography.Text>
          );
        }
      },
    },
    {
      title:
        "Коэффициент выбросов на единицу приобретенных средств производства, на единицу затраченных денежных средств, кгСО2-экв/долл. США.",
      dataIndex: "emissionFactorPerUnit",
      width: 160,
    },
    {
      title:
        "Количество приобретенных энергоресурсов, по видам, тонн или МВт∙ч;",
      dataIndex: "quantityOfPurchasedEnergy",
      width: 160,
    },
    {
      title:
        "Количество приобретенных видов топлива, по видам, тонн или МВт∙ч;",
      dataIndex: "quantityOfPurchasedFuels",
      width: 160,
    },
    {
      title:
        "Коэффициент выбросов на единицу приобретенных видов топлива, (коэффициент выбросов жизненного цикла, за исключением выбросов от сжигания топлива), кгСО2-экв/тонну;",
      dataIndex: "emissionFactorPerUnitOfFuelPurchased",
      width: 150,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className="scopeThreeTable"
    />
  );
};
