import { createContext } from "react";
import { TodoContextType } from ".";

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  setTodos: () => {},
});

