import { toggleTodo } from "@/lib/todoApi";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTodo,
    onMutate: async ({ id, completed }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) ?? [];
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => {
        const newTodos = old.map((todo) =>
          todo.id === id ? { ...todo, completed: !completed } : todo
        );
        return newTodos;
      });

      return { prevTodos };
    },
    onError: (
      error: Error,
      { id, completed },
      context: { prevTodos: Todo[] } | undefined
    ) => {
      if (context) {
        queryClient.setQueryData(["todos"], context.prevTodos);
      }
      throw error;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useToggleTodo;
