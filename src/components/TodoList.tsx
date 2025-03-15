"use client";

import TodoItem from "./TodoItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useTodos from "@/hooks/useTodos";

const TodoList = () => {
  const { fetchTodos, deleteTodo, toggleTodo } = useTodos();
  const { data: todos, isPending, error } = fetchTodos;

  const { mutate: deleteMutation } = deleteTodo;
  const { mutate: toggleMutation } = toggleTodo;

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteMutation}
          onToggle={toggleMutation}
        />
      ))}
    </div>
  );
};

export default TodoList;
