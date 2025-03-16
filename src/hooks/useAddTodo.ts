import { addTodo } from "@/lib/todoApi";
import { Todo } from "@/types/todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo: string) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });

      const prevTodos = queryClient.getQueryData<Todo[]>(["todos"]) ?? [];

      queryClient.setQueryData<Todo[]>(["todos"], (old = []) => [
        ...old,
        {
          id: `temp-${Date.now()}`,
          title: newTodo,
          completed: false,
        },
      ]);
      return { prevTodos };
    },
    onError: (
      error: Error,
      newTodo: string,
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

export default useAddTodo;
