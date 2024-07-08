import { Todo } from "@/app/providers";

export const saveToStorage = (cache: Todo[]) =>
  localStorage.setItem('cache', JSON.stringify(cache));

export const getStorage = (): Todo[] =>
  JSON.parse(localStorage.getItem('cache') ?? '[]');
