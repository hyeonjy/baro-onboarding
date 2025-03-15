"use client";

import TodoItem from "./TodoItem";
import useTodos from "@/hooks/useTodos";
import TodoSkeleton from "./TodoSkeleton";

const TodoList = () => {
  const { fetchTodos, deleteTodo, toggleTodo } = useTodos();
  const { data: todos, isPending, error } = fetchTodos;

  const { mutate: deleteMutation, error: deleteError } = deleteTodo;
  const { mutate: toggleMutation, error: toggleError } = toggleTodo;

  if (isPending) return <TodoSkeleton />;
  if (error || deleteError || toggleError)
    throw error || deleteError || toggleError;
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
