import { Todo } from "@/types/todo";
import { Trash2, CheckSquare, Square, Pencil } from "lucide-react";

type ViewTodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: ({ id, completed }: { id: string; completed: boolean }) => void;
  onEditStart: () => void;
};

export const ViewTodoItem = ({
  todo,
  onDelete,
  onToggle,
  onEditStart,
}: ViewTodoItemProps) => {
  return (
    <>
      <button
        className="text-indigo-600 hover:text-indigo-700 mr-2"
        onClick={() => onToggle({ id: todo.id, completed: todo.completed })}
      >
        {todo.completed ? <CheckSquare size={20} /> : <Square size={20} />}
      </button>

      <div className="flex items-center justify-between flex-1">
        <span
          className={`${
            todo.completed ? "line-through" : ""
          } dark:text-gray-700 dark:hover:text-black cursor-default`}
        >
          {todo.title}
        </span>

        <div className="flex items-center gap-2">
          <Pencil
            className="cursor-pointer text-gray-400 hover:text-blue-500"
            size={20}
            onClick={onEditStart}
          />
          <Trash2
            className="cursor-pointer text-gray-400 hover:text-red-500"
            size={20}
            onClick={() => onDelete(todo.id)}
          />
        </div>
      </div>
    </>
  );
};
