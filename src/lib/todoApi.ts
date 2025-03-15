import { Todo } from "@/app/types/todo";

export const fetchTodos = async () => {
  try {
    const response = await fetch("http://localhost:4000/todos");
    if (!response.ok) {
      throw new Error("할 일 목록을 가져오는데 실패했습니다.");
    }

    const todos: Todo[] = await response.json();
    return todos;
  } catch (error) {
    throw error;
  }
};
