import { createStore } from "effector";

export interface ScopeTwo {
  key: string;
  source?: string;
  workshopName?: string;
  typeOfEnergy?: string;
  energyConsumption?: number;
  unitsOfMeasurement?: string;
  fuelConsumptionInEnergy?: number;
  VPG?: number;
  total?: boolean;
}

export const $data = createStore<ScopeTwo[]>([
  {
    key: "1",
    source: "М/р №2",
    workshopName: "-",
    typeOfEnergy: "Тепловая",
    energyConsumption: 10000,
    fuelConsumptionInEnergy: 1.046,
    unitsOfMeasurement: "Гкал",
    VPG: 100,
  },
  {
    key: "2",
    source: "М/р №3",
    workshopName: "-",
    typeOfEnergy: "Тепловая",
    energyConsumption: 15000,
    fuelConsumptionInEnergy: 0.303,
    unitsOfMeasurement: "Гкал",
    VPG: 50,
  },
  {
    key: "3",
    source: "М/р №4",
    workshopName: "-",
    typeOfEnergy: "Тепловая",
    energyConsumption: 20000,
    fuelConsumptionInEnergy: 0.264,
    unitsOfMeasurement: "Гкал",
    VPG: 10,
  },
  {
    key: "4",
    source: "М/р №4",
    workshopName: "-",
    typeOfEnergy: "Тепловая",
    energyConsumption: 10000,
    fuelConsumptionInEnergy: 0.453,
    unitsOfMeasurement: "Гкал",
    VPG: 90,
  },
  {
    key: "Итого",
    total: true,
  },
]);
