import { deleteTodo } from "@/lib/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      throw error;
    },
  });
};

export default useDeleteTodo;
