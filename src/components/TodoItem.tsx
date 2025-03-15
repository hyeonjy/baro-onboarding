import { Todo } from "@/app/types/todo";
import { Trash2, CheckSquare, Square } from "lucide-react";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: ({ id, completed }: { id: string; completed: boolean }) => void;
};

const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 mb-2">
      <div className="flex items-center gap-2">
        <button
          className="text-indigo-600 hover:text-indigo-700"
          onClick={() => onToggle({ id: todo.id, completed: todo.completed })}
        >
          {todo.completed ? <CheckSquare size={20} /> : <Square size={20} />}
        </button>
        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </div>
      <Trash2
        className="cursor-pointer text-gray-400 hover:text-red-500"
        size={20}
        onClick={() => onDelete(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
