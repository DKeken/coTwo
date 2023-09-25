"use client";

import { Modal, Typography } from "antd";
import { useUnit } from "effector-react";
import { $isOpen, buttonClicked } from "./model";

const DOCard = ({ name }: { name: string }) => {
  return (
    <div
      style={{
        background: "#172028",
        borderRadius: 6,
        height: 215,
        width: 170,
        padding: 11,
      }}
    >
      <div className="flex flex-col gap-[1px]">
        <Typography.Text className="mb-1 text-white text-base font-bold leading-snug">
          {name}
        </Typography.Text>
        <Typography.Text className="text-white text-opacity-30 text-[13px] font-light leading-snug">
          Общее кол-во выбросов
        </Typography.Text>
        <div className="flex items-center justify-between">
          <Typography.Text className="text-sky-400 text-base font-medium">
            20 500 тн
          </Typography.Text>
          <Typography.Text className="text-white text-opacity-60 text-xs font-medium">
            12%
          </Typography.Text>
        </div>
        <Typography.Text className="text-white text-opacity-30 text-[13px] font-light leading-snug">
          Потенциал глобального
        </Typography.Text>
        <Typography.Text className="mb-3 text-red-500 text-base font-medium">
          0.32
        </Typography.Text>
      </div>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            width: 111,
            height: 12,
            left: 0,
            top: 0,
            position: "absolute",
            background:
              "linear-gradient(270deg, #4AB5E3 0%, rgba(74, 181, 227, 0.76) 24%, rgba(74, 181, 227, 0) 100%)",
            borderRadius: 20,
          }}
        />
        <div
          style={{
            width: 99,
            height: 12,
            left: 0,
            top: 16,
            position: "absolute",
            background:
              "linear-gradient(270deg, #B8CB6C 0%, rgba(184, 202.94, 108.23, 0) 100%)",
            borderRadius: 20,
          }}
        />
        <div
          style={{
            width: 33,
            height: 12,
            left: 0,
            top: 32,
            position: "absolute",
            background:
              "linear-gradient(270deg, #9661D9 0%, rgba(150, 97, 217, 0) 100%)",
            borderRadius: 20,
          }}
        />
      </div>
    </div>
  );
};

export const OpenObjectsModal = () => {
  const isOpen = useUnit($isOpen);

  return (
    <>
      <div
        className="absolute left-[22%] bottom-[22%] cursor-pointer invisible"
        onClick={() => buttonClicked()}
      >
        <div className="w-[180px] h-9 relative">
          <div
            className={`w-[180px] h-9 left-0 top-0 absolute ${
              isOpen ? "bg-sky-400" : "bg-gray-900"
            } bg-opacity-80 rounded-[50px]`}
          />
          <div
            className={`left-[14px] top-[9px] absolute ${
              isOpen ? "text-black" : "text-white"
            } text-[15px] font-normal ${isOpen ? "" : "underline"}`}
          >
            Распределение по ДО
          </div>
        </div>
      </div>
      <Modal
        title="Распределение по ДО"
        open={isOpen}
        onCancel={() => buttonClicked()}
        width={1790}
        centered
        className="openObjectsModal"
      >
        <div className="flex gap-[16px]">
          {[
            "ЗН",
            "РВП",
            "ЗНДХ",
            "ЗНДС - ОНО",
            "ЗНДС - УНГ",
            "ВСП",
            "Куба",
            "Андижан",
            "УНГП",
            "SAR",
          ].map((item) => (
            <DOCard key={item} name={item} />
          ))}
        </div>
      </Modal>
    </>
  );
};
