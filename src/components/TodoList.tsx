"use client";

import { deleteTodo, fetchTodos, toggleTodo } from "@/lib/todoApi";
import TodoItem from "./TodoItem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TodoList = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const queryClient = useQueryClient();

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const { mutate: toggleMutation } = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

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
