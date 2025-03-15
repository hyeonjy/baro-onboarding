"use client";

import TodoItem from "./TodoItem";
import useTodos from "@/hooks/useTodos";
import TodoSkeleton from "./TodoSkeleton";

const TodoList = () => {
  const { fetchTodos, deleteTodo, toggleTodo } = useTodos();
  const { data: todos, isPending, error } = fetchTodos;

  const { mutate: deleteMutation } = deleteTodo;
  const { mutate: toggleMutation } = toggleTodo;

  if (isPending) return <TodoSkeleton />;
  if (error) return <div>Error: {error.message}</div>;
  if (!todos) return null;

  return (
    <div className="space-y-2">
      {todos?.map((todo) => (
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
