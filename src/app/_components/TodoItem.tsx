import { Todo } from '@/types/types';
import React from 'react';

type TodoItemProps = {
  todo: Todo & { postNode: React.ReactNode };
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="mb-4 p-4 border rounded shadow">
       <h3 className="text-lg font-semibold">{todo.title}</h3>
      <p className={todo.completed ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
        {todo.completed ? 'Completed' : 'Not Completed'}
      </p>
      {todo.postNode}
    </li>
  );
}