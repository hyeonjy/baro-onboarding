import { Todo } from "@/types/todo";
import { useState } from "react";

type EditingTodoItemProps = {
  todo: Todo;
  onUpdate: ({ id, title }: { id: string; title: string }) => void;
  onEditComplete: () => void;
};

export const EditingTodoItem = ({
  todo,
  onUpdate,
  onEditComplete,
}: EditingTodoItemProps) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedTitle.trim()) {
      onUpdate({ id: todo.id, title: editedTitle.trim() });
      onEditComplete();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-indigo-600"
        autoFocus
        onBlur={handleSubmit}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-indigo-600"
      >
        수정
      </button>
    </form>
  );
};
