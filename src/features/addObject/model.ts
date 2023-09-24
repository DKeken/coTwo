import { createEvent, createStore, sample } from "effector";

export const buttonClicked = createEvent<void>();
export const $isOpen = createStore<boolean>(false);

sample({
  clock: buttonClicked,
  source: $isOpen,
  fn: (isOpen) => !isOpen, 
  target: $isOpen,
});
