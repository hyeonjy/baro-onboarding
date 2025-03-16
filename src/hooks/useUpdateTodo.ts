import { updateTodo } from "@/lib/todoApi";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async ({ id, title }) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) ?? [];
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => {
        return old.map((todo) => (todo.id === id ? { ...todo, title } : todo));
      });

      return { prevTodos };
    },
    onError: (
      error: Error,
      { id, title },
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

export default useUpdateTodo;
