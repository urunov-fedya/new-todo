import { Todo } from "..";

export type TodoContextType = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};
