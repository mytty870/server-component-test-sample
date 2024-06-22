import { Todo } from "@/types/types";
import TodoItem from "./_components/TodoItem";
import { fetchTodos } from "@/lib/dataFetch/fetchTodos";

export default async function HomePage() {
  const todos = await fetchTodos()

  if (!todos || todos.length === 0) {
    return <p>Todo が存在しないようです</p>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="list-none">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
