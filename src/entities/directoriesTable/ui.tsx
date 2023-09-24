"use client";

import { Table, Typography } from "antd";
import { useUnit } from "effector-react";
import { $data, type Directories } from "./model";
import { type ColumnsType } from "antd/es/table";

const columns: ColumnsType<Directories> = [
  {
    title: "Компонент",
    dataIndex: "component",
  },
  {
    title: "Химическая формула",
    dataIndex: "formula",
  },
  {
    title: "Содержание i-компонента (кроме СО2) в j-УВС, Wi,j,y, % об.",
    dataIndex: "iComponent",
  },
  {
    title:
      "Количество молей углерода на моль i-компонента углеводородной смеси, nC,i",
    dataIndex: "moles",
  },
  {
    title: "Wi,j,y × nC,i",
    dataIndex: "wiNc",
  },
];

export const DirectoriesTable = () => {
  const dataSource = useUnit($data);

  return <Table columns={columns} dataSource={dataSource} pagination={false} className="directoriesTable"/>;
};
