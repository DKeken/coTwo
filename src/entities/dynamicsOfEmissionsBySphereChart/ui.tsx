"use client";

import { Area, type AreaConfig } from "@ant-design/plots";
import { useUnit } from "effector-react";
import { $data } from "./model";
import dayjs from "dayjs";

export const DynamicsOfEmissionsBySphereChart = () => {
  const data = useUnit($data);

  const config: AreaConfig = {
    data: data.map((item) => ({
      ...item,
      date: dayjs(item.date).format("MMMM"),
    })),
    xField: "date",
    yField: "value",
    seriesField: "scope",
    legend: false,
    label: {
      style: {
        fill: "#ffffff",
      },
    },
    point: {
      style: {
        fill: "#17202840",
        stroke: "#17202840",
      },
    },
    color: ["#4ab5e3", "#b8cb6c", "#9661d9"],
    xAxis: { line: { style: { lineWidth: 0 } } },
    yAxis: {
      label: { style: { fillOpacity: 0 } },
      grid: { line: { style: { lineWidth: 0 } } },
    },
    smooth: true,
    tooltip: {
      domStyles: {
        "g2-tooltip": { background: "#172028" },
        "g2-tooltip-title": { color: "#ffffff80" },
        "g2-tooltip-name": { color: "#ffffff80" },
        "g2-tooltip-value": { color: "#ffffff80" },
      },
    },
  };

  return (
    <div
      className="w-full flex-col flex gap-[10px]"
      style={{ height: "calc(100% - 1px)" }}
    >
      <div
        className="w-[617px] h-[17px] flex items-center gap-[14px]"
        style={{ transform: "translate(30px, 0px)" }}
      >
        <div className="text-white text-sm font-normal">
          Динамика выбросов по сферам, тн
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-sky-400 rounded-[22px]"></div>
            <div className="text-white text-[13px] font-normal">
              Сфера охвата 1
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-lime-300 rounded-[22px]"></div>
            <div className="text-white text-[13px] font-normal">
              Сфера охвата 2
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-violet-500 rounded-[22px]"></div>
            <div className="text-white text-[13px] font-normal">
              Сфера охвата 3
            </div>
          </div>
        </div>
      </div>
      <Area
        {...config}
        style={{ transform: "translate(-40px, 0px)", height: "inherit" }}
      />
    </div>
  );
};
