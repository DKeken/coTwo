import { createStore } from "effector";

interface DynamicsOfEmissions {
  parameter: string;
  value: number;
  date: string;
}
export const parameters: string[] = [
  "Приобретение товаров",
  "Приобретение средств производства",
  "Приобретение топлива и энергоресурсов",
  "Транспорт и распределение",
  "Обращение с отходами",
  "Командирование сотрудников",
  "Перемещение сотрудников",
  "Активы в лизинге",
  "Распределение реализованной",
  "Подготовка, переработка",
  "Утилизация",
];

const generateData = (parameters: string[], count: number) => {
  const data: DynamicsOfEmissions[] = [];

  for (let i = 0; i < count; i++) {
    for (const parameter of parameters) {
      const randomValue = Math.floor(Math.random() * 51);
      const date = `2023-${String(i + 1).padStart(2, "0")}-01`;

      data.push({
        parameter,
        value: randomValue,
        date,
      });
    }
  }

  return data;
};

export const $data = createStore<DynamicsOfEmissions[]>(
  generateData(parameters, 12)
);
