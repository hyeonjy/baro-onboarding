"use client";

import useTodos from "@/hooks/useTodos";
import TodoItem from "./TodoItem";
import TodoSkeleton from "./TodoSkeleton";
import { Todo } from "@/types/todo";

const TodoList = () => {
  const { fetchTodos, deleteTodo, toggleTodo, updateTodo } = useTodos();
  const { data: todos, isPending, error } = fetchTodos;

  const { mutate: deleteMutation, error: deleteError } = deleteTodo;
  const { mutate: toggleMutation, error: toggleError } = toggleTodo;
  const { mutate: updateMutation, error: updateError } = updateTodo;

  if (isPending) return <TodoSkeleton />;
  if (error || deleteError || toggleError || updateError)
    throw error || deleteError || toggleError || updateError;
  if (!todos) return null;

  return (
    <div className="space-y-2">
      {todos?.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteMutation}
          onToggle={toggleMutation}
          onUpdate={updateMutation}
        />
      ))}
    </div>
  );
};

export default TodoList;
