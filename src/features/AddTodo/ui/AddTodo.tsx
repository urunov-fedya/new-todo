import { Input } from "@/shared";
import { FC, useState } from "react";

import { useTodo } from "@/app/providers/TodoProvider/model/hooks";
export const AddTodo: FC = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const handleAdd = (value: string) => {
    addTodo(value);
    setTodo("");
  };

  return (
    <div>
      <Input
        variant="outline"
        placeholder="Новая запись"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onEnter={handleAdd}
      />
    </div>
  );
};
