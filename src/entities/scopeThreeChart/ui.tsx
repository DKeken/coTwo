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
    legend: {
      layout: "vertical",
      position: "left",
      selected: parameters.reduce(
        (acc, parameter, index) => (
          (acc[parameter] = index < 3 || Math.random() < 0.1), acc
        ),
        {}
      ),
    },
  };

  return <Line {...config} />;
};
