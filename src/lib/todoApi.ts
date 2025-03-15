import { Todo } from "@/types/todo";

export const fetchTodos = async () => {
  try {
    const response = await fetch("http://localhost:4000/todos", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("할 일 목록을 가져오는데 실패했습니다.");
    }

    const todos: Todo[] = await response.json();
    return todos;
  } catch (error: unknown) {
    throw new Error("할 일 목록을 가져오는데 실패했습니다.");
  }
};

export const addTodo = async (title: string) => {
  try {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, completed: false }),
    });

    if (!response.ok) {
      throw new Error("할 일을 추가하는데 실패했습니다.");
    }

    const newTodo: Todo = await response.json();
    return newTodo;
  } catch (error) {
    throw new Error("할 일을 추가하는데 실패했습니다.");
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("할 일을 삭제하는데 실패했습니다.");
    }
  } catch (error) {
    throw new Error("할 일을 삭제하는데 실패했습니다.");
  }
};

export const toggleTodo = async ({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });

    if (!response.ok) {
      throw new Error("할 일을 완료 상태로 변경하는데 실패했습니다.");
    }
  } catch (error) {
    throw new Error("할 일을 완료 상태로 변경하는데 실패했습니다.");
  }
};

export const updateTodo = async ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error("할 일을 업데이트하는데 실패했습니다.");
    }
  } catch (error) {
    throw new Error("할 일을 업데이트하는데 실패했습니다.");
  }
};
