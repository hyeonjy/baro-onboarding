"use client";

import useTodos from "@/hooks/useTodos";
import { Todo } from "@/types/todo";

const TodoProgress = () => {
  const { fetchTodos } = useTodos();
  const { data: todos = [], error } = fetchTodos;

  if (error) throw error;

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo: Todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;
  const progressPercentage =
    totalTodos === 0 ? 0 : Math.round((completedTodos / totalTodos) * 100);

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">남은 할 일: {remainingTodos}개</span>
        <span className="text-gray-700">진행률: {progressPercentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TodoProgress;
