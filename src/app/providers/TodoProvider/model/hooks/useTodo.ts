import { useCallback, useContext, useMemo } from "react";
import { saveToStorage } from "@/shared";
import { type Todo, TodoContext, TStatusTodo } from "@/app/providers";

export const useTodo = (id?: number | string) => {
  const { todos, setTodos } = useContext(TodoContext);

  const addTodo = useCallback((title: string) => {
    const todo: Todo = {
      id: todos.length + 1,
      title,
      status: 'rejected',
      createdAt: new Date(),
    }

    const newTodo = [...todos, todo];
    
    saveToStorage(newTodo);
    setTodos(newTodo)
  }, [setTodos, todos])

  const deleteTodo = useCallback((id: number) => {
    const newTodo = todos.filter(todo => todo.id !== id);
    
    saveToStorage(newTodo);
    setTodos(newTodo);
  }, [setTodos, todos]);

  const updateTodo = useCallback((todo: Todo) => {
    const newTodo = todos.map(t => t.id === todo.id ? todo : t);
    
    saveToStorage(newTodo);
    setTodos(newTodo);
  }, [setTodos, todos]);

  const competedTodo = useCallback((id: number) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        const status: TStatusTodo = todo.status === 'completed' ? 'rejected' : 'completed'

        return {
          ...todo,
          status,
        };
      }
      return todo
    });
    
    saveToStorage(newTodo);
    setTodos(newTodo);
  }, [setTodos, todos]);
  
  const todo = useMemo(() => id ? todos.find(todo => todo.id === +id) : undefined, [id, todos]);
  
  return { todos, todo, addTodo, deleteTodo, updateTodo, competedTodo, setTodos };
};
