import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { Todo, TodoContext } from '..';


export const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const defaultValue = useMemo(() => ({
    todos,
    setTodos
  }), [todos]);

  return (
    <TodoContext.Provider value={defaultValue}>
      {children}
    </TodoContext.Provider>
  )
}
