"use client";

import { Line, LineConfig } from "@ant-design/plots";
import { useUnit } from "effector-react";
import { $data, parameters } from "./model";
import dayjs from "dayjs";

export const ScopeThreeChart = () => {
  const data = useUnit($data);

  const config: LineConfig = {
    data: data.map((item) => ({
      ...item,
      date: dayjs(item.date).format("MMMM"),
    })),
    xField: "date",
    yField: "value",
    seriesField: "parameter",
    stepType: "hvh",
    tooltip: {
      domStyles: {
        "g2-tooltip": { background: "#172028" },
        "g2-tooltip-title": { color: "#ffffff80" },
        "g2-tooltip-name": { color: "#ffffff80" },
        "g2-tooltip-value": { color: "#ffffff80" },
      },
    },
    yAxis: {
      grid: { line: { style: { opacity: 0.1 } } },
      label: { style: { opacity: 0.3 } },
    },
    xAxis: { line: { style: { lineWidth: 0 } } },
    color: ["#DD3448", "#00BE37"],
    legend: {
      layout: "vertical",
      position: "left",
      selected: {
        "Приобретение товаров": false,
        "Приобретение средств производства": false,
        "Приобретение топлива и энергоресурсов": false,
        "Транспорт и распределение": true,
        "Обращение с отходами": false,
        "Командирование сотрудников": false,
        "Перемещение сотрудников": false,
        "Активы в лизинге": false,
        "Распределение реализованной": false,
        "Подготовка, переработка": false,
        Утилизация: true,
      },
    },
  };

  return <Line {...config} />;
};
