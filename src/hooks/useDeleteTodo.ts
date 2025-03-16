import { deleteTodo } from "@/lib/todoApi";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) ?? [];
      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => {
        return old.filter((todo) => todo.id !== id);
      });

      return { prevTodos };
    },
    onError: (
      error: Error,
      id: string,
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

export default useDeleteTodo;
