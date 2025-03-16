"use client";

import { useState } from "react";
import useTodos from "@/hooks/useTodos";
import TodoItem from "./TodoItem";
import TodoSkeleton from "./TodoSkeleton";
import TodoTabs from "./TodoTabs";
import { Todo } from "@/types/todo";
import { TabType } from "./TodoTabs";

const TodoList = () => {
  const [currentTab, setCurrentTab] = useState<TabType>("all");
  const { fetchTodos, deleteTodo, toggleTodo, updateTodo } = useTodos();
  const { data: todos, isPending, error } = fetchTodos;

  const { mutate: deleteMutation, error: deleteError } = deleteTodo;
  const { mutate: toggleMutation, error: toggleError } = toggleTodo;
  const { mutate: updateMutation, error: updateError } = updateTodo;

  if (isPending) return <TodoSkeleton />;
  if (error || deleteError || toggleError || updateError)
    throw error || deleteError || toggleError || updateError;
  if (!todos) return null;

  const filteredTodos = todos.filter((todo: Todo) => {
    if (currentTab === "all") return true;
    if (currentTab === "active") return !todo.completed;
    if (currentTab === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <TodoTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="space-y-2">
        {filteredTodos.map((todo: Todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={deleteMutation}
            onToggle={toggleMutation}
            onUpdate={updateMutation}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
