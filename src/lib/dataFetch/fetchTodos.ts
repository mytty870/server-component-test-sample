import { Todo } from "@/types/types";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const todos: Todo[] = await res.json();
  return todos.slice(0, 9);
}