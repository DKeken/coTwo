import { createStore } from "effector";

export interface ScopeTwo {
  key: string;
  source?: string;
  VPG?: number;
  costOfPurchasedGoods?: number;
  emissionFactor?: number;
  costOfTheAcquired?: number;
  emissionFactorPerUnit?: number;
  quantityOfPurchasedEnergy?: number;
  quantityOfPurchasedFuels?: number;
  emissionFactorPerUnitOfFuelPurchased?: number;
  total?: boolean;
}

export const $data = createStore<ScopeTwo[]>([
  {
    key: "1",
    source: "Закупка Бензин нормаль АИ-92 КТ",
    VPG: 600,
    costOfPurchasedGoods: 100000,
    emissionFactor: 0.1,
    costOfTheAcquired: 100000,
    emissionFactorPerUnit: 4.19,
    quantityOfPurchasedEnergy: 980,
    quantityOfPurchasedFuels: 73.3,
    emissionFactorPerUnitOfFuelPurchased: 315,
  },
  {
    key: "2",
    source: "Закупка Дизельное топливо ДТ ЕВРО К5",
    VPG: 800,
    costOfPurchasedGoods: 430000,
    emissionFactor: 0.12,
    costOfTheAcquired: 100000,
    emissionFactorPerUnit: 4.25,
    quantityOfPurchasedEnergy: 5320,
    quantityOfPurchasedFuels: 74.1,
    emissionFactorPerUnitOfFuelPurchased: 6299,
  },
  {
    key: "3",
    source: "Закупка Бензин нормаль АИ-92 КТ",
    VPG: 600,
    costOfPurchasedGoods: 100000,
    emissionFactor: 0.1,
    costOfTheAcquired: 100000,
    emissionFactorPerUnit: 4.19,
    quantityOfPurchasedEnergy: 980,
    quantityOfPurchasedFuels: 73.3,
    emissionFactorPerUnitOfFuelPurchased: 315,
  },
  {
    key: "4",
    source: "Закупка Дизельное топливо ДТ ЕВРО К5",
    VPG: 700,
    costOfPurchasedGoods: 430000,
    emissionFactor: 0.12,
    costOfTheAcquired: 100000,
    emissionFactorPerUnit: 4.25,
    quantityOfPurchasedEnergy: 5320,
    quantityOfPurchasedFuels: 74.1,
    emissionFactorPerUnitOfFuelPurchased: 6299,
  },
  {
    key: "Итого",
    total: true,
  },
]);
