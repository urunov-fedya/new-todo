export type TStatusTodo = 'completed' | 'rejected' | 'all'

export type Todo = {
  id: number;
  title: string;
  status: TStatusTodo;
  createdAt: Date | string;
}
