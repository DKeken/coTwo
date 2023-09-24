import { createStore } from "effector";

export interface Directories {
  key: string;
  component: string;
  formula: string;
  iComponent: string;
  moles: string;
  wiNc: string;
}

export const $data = createStore<Directories[]>([
  {
    key: "Диоксид углерода",
    component: "Диоксид углерода",
    formula: "CO2",
    iComponent: "2,198000",
    moles: "1",
    wiNc: "0",
  },
  {
    key: "Кислород",
    component: "Кислород",
    formula: "O2",
    iComponent: "0,021000",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Азот",
    component: "Азот",
    formula: "N2",
    iComponent: "4,993000",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Сероводород",
    component: "Сероводород",
    formula: "H2S",
    iComponent: "3,222000",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Водород",
    component: "Водород",
    formula: "H2",
    iComponent: "0,004000",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Гелий",
    component: "Гелий",
    formula: "He",
    iComponent: "0,021000",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Аргон",
    component: "Аргон",
    formula: "Ar",
    iComponent: "1",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Оксид углерода",
    component: "Оксид углерода",
    formula: "CO",
    iComponent: "1",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "Метан",
    component: "Метан",
    formula: "CH4",
    iComponent: "58,787000",
    moles: "1",
    wiNc: "58,787",
  },
  {
    key: "Этан",
    component: "Этан",
    formula: "C2H6",
    iComponent: "13,788000",
    moles: "2",
    wiNc: "27,576",
  },
  {
    key: "Пропан",
    component: "Пропан",
    formula: "C3H8",
    iComponent: "10,400000",
    moles: "3",
    wiNc: "31,2",
  },
  {
    key: "изо-Бутан",
    component: "изо-Бутан",
    formula: "i-C4H10",
    iComponent: "4,459000",
    moles: "4",
    wiNc: "17,836",
  },
  {
    key: "н-Бутан",
    component: "н-Бутан",
    formula: "n-C4H10",
    iComponent: "4",
    moles: "0",
    wiNc: "0",
  },
  {
    key: "изо-Пентан",
    component: "изо-Пентан",
    formula: "i-C5H12",
    iComponent: "1,438000",
    moles: "4",
    wiNc: "7,19",
  },
]);
