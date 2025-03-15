import { addTodo } from "@/lib/todoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error) => {
      console.error(error.message);
    },
  });
};

export default useAddTodo;
