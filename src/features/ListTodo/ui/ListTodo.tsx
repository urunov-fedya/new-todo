import { useTodo } from "@/app/providers";
import { Icons, cn } from "@/shared";
import cls from "./ListTodo.module.scss";

export const ListTodo = () => {
  const { todos, competedTodo, deleteTodo } = useTodo();

  return (
    <div className={cls.listTodo}>
      {todos.map((todo) => (
        <div key={todo.id} className={cls.item}>
          <span
            className={cn(cls.item, [
              todo.status === "completed" ? cls.completed : "",
            ])}
            onClick={() => competedTodo(todo.id)}
          >
            {todo.title}
          </span>
          <div className={cls.delete} onClick={() => deleteTodo(todo.id)}>
            <img src={Icons.X} alt="X" />
          </div>
        </div>
      )).reverse()}
    </div>
  );
};
