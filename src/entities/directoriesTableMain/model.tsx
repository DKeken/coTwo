import { createStore } from "effector";

export interface DirectoriesMain {
  key: string;
  name: string;
  disabled?: boolean;
}

export const $data = createStore<DirectoriesMain[]>([
  {
    key: "1",
    name: "Расчет коэффициента выбросов СО2 при сжигании топлива на стационарных источниках по компонентному составу",
  },
  {
    key: "2",
    name: "Расчет коэффициента выбросов СО2 при сжигании углеводородной смеси (УВС) на факельной установке",
    disabled: true,
  },
  {
    key: "3",
    name: "Новый справочник",
    disabled: true,
  },
]);
