import { DynamicsOfEmissionsBySphereChart } from "@/entities/dynamicsOfEmissionsBySphereChart/ui";
import { GlobalWarmingImage } from "@/shared/assets/GlobalWarmingImage";
import { TotalEmissionsImage } from "@/shared/assets/TotalEmissionsImage";
import { Card } from "antd";

import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex items-end gap-[20px] h-[20%]">
      <div className="flex pt-[10px]">
        <div className="relative">
          <div className="text-center text-white text-[32px] font-bold absolute top-[-11%] left-[29%]">
            23 000 тн
          </div>
          <TotalEmissionsImage />
          <div className="absolute left-[22%] bottom-[22%]">
            <div className="w-[180px] h-9 relative">
              <div className="w-[180px] h-9 left-0 top-0 absolute bg-gray-900 bg-opacity-80 rounded-[50px]" />
              <div className="left-[14px] top-[9px] absolute text-white text-[15px] font-normal  underline">
                Распределение по ДО
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-end">
          <div className="text-center text-rose-600 text-[32px] font-bold absolute top-[-11%] left-[41%]">
            520
          </div>
          <GlobalWarmingImage />
        </div>
      </div>
      <div className="grow pb-[12px] h-full">
        <DynamicsOfEmissionsBySphereChart />
      </div>
    </div>
  );
};

const DashboardScopeOne = () => (
  <>
    <div className="text-sky-400 text-2xl font-medium">20 500 тн</div>
    <div className="flex gap-[42px]">
      <div className="text-white text-base font-thin leading-[42px]">
        Стационарное сжигание
        <br />
        Мобильное сжигание топлива
        <br />
        Летучие выбросы
        <br />
        Очистка сточных вод
        <br />
        Обращение с отходами
      </div>
      <div className="text-right">
        <span className="text-sky-400 text-base font-medium leading-[42px]">
          10000 тн
          <br />
          2000 тн
          <br />
          500 тн
          <br />
          2000 тн
          <br />
        </span>
        <span className="text-stone-500 text-base font-medium leading-[42px]">
          5000 тн
        </span>
      </div>
      <div className="gradient-box">
        <div className="gradient-box__item"></div>
        <div className="gradient-box__item" style={{ width: 214 }}></div>
        <div className="gradient-box__item" style={{ width: 80 }}></div>
        <div className="gradient-box__item" style={{ width: 214 }}></div>
        <div
          className="gradient-box__item gradient-box__item--last"
          style={{ width: 492 }}
        ></div>
      </div>
    </div>
  </>
);

const DashboardScopeTwo = () => (
  <>
    <div className="text-[#B8CB6C] text-2xl font-medium">1 500 тн</div>
    <div className="flex gap-[17px]">
      <div className="flex gap-[42px]">
        <div className="text-white text-base font-light leading-[42px]">
          Электрическая
          <br />
          Тепловая
        </div>
        <div className="text-right w-[63px] text-lime-300 text-base font-light leading-[42px]">
          10000 тн
          <br />
          2000 тн
        </div>
      </div>
      <div className="gradient-box">
        <div
          className="gradient-box__item gradient-box__item--last"
          style={{ width: 480 }}
        ></div>
        <div
          className="gradient-box__item gradient-box__item--last"
          style={{ width: 145 }}
        ></div>
      </div>
    </div>
  </>
);

const DashboardScopeThree = () => (
  <>
    <div className="text-[#9662D9] text-2xl font-medium">2 000 тн</div>
  </>
);

export default function Home() {
  return (
    <main className="h-full bg-[#1f2a36] px-[20px] pt-[22px]">
      <DashboardHeader />
      <div className="flex flex-col gap-[10px] w-full h-[80%]">
        <div className="flex gap-[10px] h-[300px]">
          <Card
            title={
              <div className="flex items-center gap-3">
                <div className="text-xl text-white font-normal">
                  Сфера охвата 1
                </div>
                <div className="text-[#ffffff2c] text-base font-light">
                  Прямые выбросы
                </div>
              </div>
            }
            bordered={false}
            className="bg-[#172028] w-[1150px] rounded-lg shadow border-none"
            bodyStyle={{ padding: "0px 22px" }}
            headStyle={{ height: 38, minHeight: 38 }}
          >
            <DashboardScopeOne />
          </Card>
          <Card
            title={
              <div className="flex items-center gap-3">
                <div className="text-xl text-white font-normal">
                  Сфера охвата 2
                </div>
                <div className="text-[#ffffff2c] text-base font-light">
                  Косвенные энергетические выбросы
                </div>
              </div>
            }
            bordered={false}
            className="bg-[#172028] grow-[1] rounded-lg shadow border-none "
            bodyStyle={{ padding: "0px 22px" }}
            headStyle={{ height: 38, minHeight: 38 }}
          >
            <DashboardScopeTwo />
          </Card>
        </div>
        <Card
          title={
            <div className="flex items-center gap-3">
              <div className="text-xl text-white font-normal">
                Сфера охвата 3
              </div>
              <div className="text-[#ffffff2c] text-base font-light">
                Косвенные выбросы
              </div>
            </div>
          }
          className="bg-[#172028] rounded-lg border-none"
          style={{ height: "calc(100% - 300px)" }}
          bodyStyle={{ padding: "0px 22px" }}
          headStyle={{ height: 38, minHeight: 38 }}
        >
          <DashboardScopeThree />
        </Card>
      </div>
    </main>
  );
}
