import { Icons } from '@/shared';
import { NavLink } from 'react-router-dom';
import cls from './Sidebar.module.scss';
import { Todo, useTodo } from '@/app/providers';
import { useState } from 'react';


const renderItem = (todo: Todo) => (
  <li key={todo.id} className={cls.item}>
    <NavLink to={`todo/${todo.id}`} className={({ isActive }) => `${cls.link} ${isActive ? cls.active : 'inactive'}`}>
      {todo.title}
    </NavLink>
  </li>
)

export const Sidebar = () => {
  const { todos } = useTodo();
  const [filter, setfilter] = useState('all')
  return (
    <aside className={cls.sidebar}>
      <select value={filter} onChange={e => setfilter(e.target.value)}>
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="rejected">Невыполненные</option>
      </select>
      <NavLink to="/" className={cls.all}>
        <img src={Icons.List} alt="list" />
        <p>
          All todos
        </p>
      </NavLink>
      <ul className={cls.list}>
        {
          filter === 'all' ? todos.map(renderItem).reverse() : todos.filter(todo => todo.status === filter).map(renderItem).reverse()
        }
      </ul>
    </aside>
  )
}
