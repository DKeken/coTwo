import dayjs, { type Dayjs } from "dayjs";
import { createStore } from "effector";

export interface Objects {
  key: string;
  ejection: boolean;
  object: string;
  scope: string; //enum
  fuelType: string; //enum
  workTime: Dayjs;
  rate: {
    value: number;
    unit: string;
  };
}

export const $data = createStore<Objects[]>([
  {
    key: "1",
    ejection: true,
    object: "Объект 1",
    scope: "Сфера 1",
    fuelType: "Тип 1",
    workTime: dayjs(),
    rate: {
      value: 10,
      unit: "л/час",
    },
  },

  {
    key: "3",
    ejection: true,
    object: "Объект 3",
    scope: "Сфера 3",
    fuelType: "Тип 3",
    workTime: dayjs(),
    rate: {
      value: 8,
      unit: "л/час",
    },
  },
  {
    key: "2",
    ejection: false,
    object: "Объект 2",
    scope: "Сфера 2",
    fuelType: "Тип 2",
    workTime: dayjs(),
    rate: {
      value: 15,
      unit: "л/час",
    },
  },
  {
    key: "4",
    ejection: false,
    object: "Объект 4",
    scope: "Сфера 1",
    fuelType: "Тип 2",
    workTime: dayjs(),
    rate: {
      value: 12,
      unit: "тн/час",
    },
  },
  {
    key: "5",
    ejection: true,
    object: "Объект 5",
    scope: "Сфера 2",
    fuelType: "Тип 1",
    workTime: dayjs(),
    rate: {
      value: 9,
      unit: "л/час",
    },
  },
]);
