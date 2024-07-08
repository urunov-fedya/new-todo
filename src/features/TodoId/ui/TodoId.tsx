import {useTodo} from "@/app/providers";
import {Icons, Input} from "@/shared";
import {useParams} from "react-router-dom";
import cls from "./TodoId.module.scss";

export const TodoId = () => {
  const {id} = useParams<{id: string}>();
  const {todo, updateTodo, competedTodo} = useTodo(id);

  return todo ? (
    <div className={cls.content}>
      <Input
        value={todo?.title}
        onChange={(e) => updateTodo({...todo, title: e.target.value})}
      />
      <img
        className={cls.status}
        src={todo.status === "completed" ? Icons.Check : Icons.Circle}
        alt="status"
        onClick={() => competedTodo(todo.id)}
      />
    </div>
  ) : (
    <div>Todo not found</div>
  );
};
