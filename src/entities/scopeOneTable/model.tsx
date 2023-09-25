import { createEvent, createStore, sample } from "effector";

export interface ScopeOne {
  key: string;
  source?: string;
  workshopName?: string;
  fuelType?: string;
  fuelConsumption?: number;
  lowCalorificValue?: number;
  fuelConsumptionInEnergy?: number;
  fuelOxidationFactor?: number;
  COEmissionFactor?: number;
  VPG?: number;
  total?: boolean;
}

export const dataChanged = createEvent<ScopeOne[]>();

export const $data = createStore<ScopeOne[]>([
  {
    key: "1",
    source: "НЭС-1",
    workshopName: "Энергоцентр №3",
    fuelType: "Нефть",
    fuelConsumption: 0.05,
    lowCalorificValue: 42.5,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 74.1,
    VPG: 0,
  },
  {
    key: "2",
    source: "ДЭС",
    workshopName: "-",
    fuelType: "Топливо дизельное",
    fuelConsumption: 2000,
    lowCalorificValue: 42.5,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 74.1,
    VPG: 6299,
  },
  {
    key: "3",
    source: "ДЭС",
    workshopName: "-",
    fuelType: "Топливо дизельное",
    fuelConsumption: 3000,
    lowCalorificValue: 42.5,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 74.1,
    VPG: 9448,
  },
  {
    key: "4",
    source: "ДЭС",
    workshopName: "-",
    fuelType: "Топливо дизельное",
    fuelConsumption: 6000,
    lowCalorificValue: 42.5,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 74.1,
    VPG: 18896,
  },
  {
    key: "5",
    source: "Котельная",
    workshopName: "Система теплоснабжения",
    fuelType: "ПНГ",
    fuelConsumption: 10000,
    lowCalorificValue: 0,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 3.3948,
    VPG: 23854,
  },
  {
    key: "6",
    source: "Котельная",
    workshopName: "Система теплоснабжения",
    fuelType: "ПНГ",
    fuelConsumption: 10000,
    lowCalorificValue: 0,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 3.3948,
    VPG: 22990,
  },
  {
    key: "7",
    source: "НЭС-2",
    workshopName: "Энергоцентр",
    fuelType: "Нефть",
    fuelConsumption: 0.5,
    lowCalorificValue: 41.9,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 73.3,
    VPG: 1593,
  },
  {
    key: "8",
    source: "НЭС-3",
    workshopName: "Энергоцентр",
    fuelType: "Нефть",
    fuelConsumption: 0.1,
    lowCalorificValue: 41.9,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 73.3,
    VPG: 307,
  },
  {
    key: "9",
    source: "ГТУ 1",
    workshopName: "Энергоцентр №1",
    fuelType: "ПНГ",
    fuelConsumption: 10000,
    lowCalorificValue: 0,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 3.3948,
    VPG: 33948,
  },
  {
    key: "10",
    source: "ГТУ 2",
    workshopName: "Энергоцентр №2",
    fuelType: "ПНГ",
    fuelConsumption: 10000,
    lowCalorificValue: 0,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 2.3854,
    VPG: 23854,
  },
  {
    key: "11",
    source: "Печь П2",
    workshopName: "Площадка печей",
    fuelType: "ПНГ",
    fuelConsumption: 10000,
    lowCalorificValue: 0,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 2.3854,
    VPG: 33948,
  },
  {
    key: "12",
    source: "Печь П4",
    workshopName: "Площадка печей",
    fuelType: "ПНГ",
    fuelConsumption: 10000,
    lowCalorificValue: 0,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 2.3854,
    VPG: 23854,
  },
  {
    key: "13",
    source: "ДЭС",
    workshopName: "-",
    fuelType: "Топливо дизельное",
    fuelConsumption: 3000,
    lowCalorificValue: 42.5,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 74.1,
    VPG: 9448,
  },
  {
    key: "14",
    source: "ДЭС",
    workshopName: "-",
    fuelType: "Топливо дизельное",
    fuelConsumption: 0.1,
    lowCalorificValue: 42.5,
    fuelConsumptionInEnergy: 0,
    fuelOxidationFactor: 1.0,
    COEmissionFactor: 74.1,
    VPG: 315,
  },
  {
    key: "Итого",
    total: true,
  },
]);

sample({
  clock: dataChanged,
  source: $data,
  fn: (source, changed) => changed,
  target: $data,
});
