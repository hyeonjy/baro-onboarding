"use client";

import { Todo } from "@/app/types/todo";
import { fetchTodos } from "@/lib/todoApi";
import { useQuery } from "@tanstack/react-query";

const TodoList = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {todos.map((todo: Todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </div>
  );
};

export default TodoList;
