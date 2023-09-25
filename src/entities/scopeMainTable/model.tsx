import { createStore } from "effector";

export interface ScopeTwo {
  key: string;
  scope?: string;
  category?: string;
  totalMassOfGreenhouseGasEmissions?: number;
  total?: boolean;
}

export const $data = createStore<ScopeTwo[]>([
  {
    key: "1",
    scope: "Сфера 1",
    category: "Стационарное сжигание",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "2",
    scope: "",
    category: "Мобильное сжигание топлива (факел)",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "3",
    scope: "",
    category: "Летучие выбросы (фугутирование)",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "4",
    scope: "",
    category: "Очистка сточных вод",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "5",
    scope: "",
    category: "Обращение с отходами",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "Итого по Сфере 1",
    total: true,
  },
  {
    key: "6",
    scope: "Сфера 2",
    category: "Тепловые",
    totalMassOfGreenhouseGasEmissions: 250,
  },
  {
    key: "7",
    scope: "",
    category: "Энергетические",
    totalMassOfGreenhouseGasEmissions: 13590,
  },
  {
    key: "Итого по Сфере 2",
    total: true,
  },
  {
    key: "8",
    scope: "Сфера 3",
    category: "Приобретение товаров (оборотные средства) и услуг",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "9",
    scope: "",
    category: "Приобретение средств производства (основные средства)",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "10",
    scope: "",
    category: "Приобретение топлива и энергоресурсов, не учтенных в сферах",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "11",
    scope: "",
    category: "Транспорт и распределение приобретенных товаров",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "12",
    scope: "",
    category: "Командирование сотрудников",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "13",
    scope: "",
    category: "Перемещение сотрудников",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "14",
    scope: "",
    category: "Активы, находящиеся в лизинге",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "15",
    scope: "",
    category: "Транспорт и распределение реализованной продукции",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "16",
    scope: "",
    category: "Подготовка, переработка реализованной продукции",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "17",
    scope: "",
    category: "Утилизация реализованной продукции",
    totalMassOfGreenhouseGasEmissions: 0,
  },
  {
    key: "Итого по Сфере 3",
    total: true,
  },
  {
    key: "Общее по сферам",
    total: true,
  },
]);
