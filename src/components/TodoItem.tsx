import { Todo } from "@/types/todo";
import { useState } from "react";
import { EditingTodoItem } from "./EditingTodoItem";
import { ViewTodoItem } from "./ViewTodoItem";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: ({ id, completed }: { id: string; completed: boolean }) => void;
  onUpdate: ({ id, title }: { id: string; title: string }) => void;
};

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 mb-2">
      {isEditing ? (
        <EditingTodoItem
          todo={todo}
          onUpdate={onUpdate}
          onEditComplete={() => setIsEditing(false)}
        />
      ) : (
        <ViewTodoItem
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEditStart={() => setIsEditing(true)}
        />
      )}
    </div>
  );
};

export default TodoItem;
