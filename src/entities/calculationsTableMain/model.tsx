import { Dayjs } from "dayjs";
import { createStore } from "effector";

export interface CalculationsMain {
  key: string;
  name: string;
  year?: string;
  inner?: boolean;
  arrowColor?: string;
  disabled?: boolean;
  children?: Array<CalculationsMain>;
}

export const $data = createStore<CalculationsMain[]>([
  {
    key: "1",
    name: "Расчет с 1 января 2021 по 31 декабря 2021",
    year: "2021",
    disabled: true,
  },
  {
    key: "2",
    name: "Расчет с 1 января 2022 по 31 декабря 2022",
    year: "2022",
    disabled: true,
  },
  {
    key: "3",
    name: "Расчет с 1 января 2023 по 20 сентября 2023",
    year: "2023",
    children: [
      { key: "1-1", inner: true, name: "Сфера 1. Стационарное сжигание" },
      {
        key: "1-2",
        inner: true,
        name: "Сфера 1. Мобильное сжигание топлива",
        disabled: true,
      },
      {
        key: "1-3",
        inner: true,
        name: "Сфера 1. Летучие выбросы",
        disabled: true,
      },
      {
        key: "1-4",
        inner: true,
        name: "Сфера 1. Очистка сточных вод",
        disabled: true,
      },
      {
        key: "1-5",
        inner: true,
        name: "Сфера 1. Обращение с отходами",
        disabled: true,
      },
      {
        key: "1-6",
        inner: true,
        name: "Сфера 2. Тепловые",
        arrowColor: "#B8CB6C",
      },
      {
        key: "1-7",
        inner: true,
        name: "Сфера 2. Энергетические",
        arrowColor: "#B8CB6C",
        disabled: true,
      },
      {
        key: "1-8",
        inner: true,
        name: "Сфера 3. Приобретение товаров (оборотные средства) и услуг",
        arrowColor: "#9661D9",
      },
      {
        key: "1-9",
        inner: true,
        name: "Сфера 3. Приобретение средств производства (основные средства)",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-10",
        inner: true,
        name: "Сфера 3. Приобретение топлива и энергоресурсов, не учтенных в сферах",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-11",
        inner: true,
        name: "Сфера 3. Транспорт и распределение приобретенных товаров",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-12",
        inner: true,
        name: "Сфера 3. Командирование сотрудников",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-13",
        inner: true,
        name: "Сфера 3. Перемещение сотрудников",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-14",
        inner: true,
        name: "Сфера 3. Активы, находящиеся в лизинге",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-15",
        inner: true,
        name: "Сфера 3. Транспорт и распределение реализованной продукции",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-16",
        inner: true,
        name: "Сфера 3. Подготовка, переработка реализованной продукции",
        arrowColor: "#9661D9",
        disabled: true,
      },
      {
        key: "1-17",
        inner: true,
        name: "Сфера 3. Утилизация реализованной продукции",
        arrowColor: "#9661D9",
        disabled: true,
      },
    ],
  },
]);
