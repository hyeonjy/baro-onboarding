"use client";

import useTodos from "@/hooks/useTodos";
import { useState } from "react";

const TodoInput = () => {
  const [title, setTitle] = useState<string>("");

  const { addTodo } = useTodos();
  const { mutate: addMutation } = addTodo;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    addMutation(title);
    setTitle("");
  };

  return (
    <form className="flex gap-2 mb-6" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="이곳에 해야할 일을 적어주세요"
        className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600"
      />
      <button className="bg-indigo-600 text-white p-4 rounded-lg text-2xl w-[46px] h-[46px] flex items-center justify-center">
        +
      </button>
    </form>
  );
};

export default TodoInput;
