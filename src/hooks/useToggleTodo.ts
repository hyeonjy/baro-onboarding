import { toggleTodo } from "@/lib/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};

export default useToggleTodo;
