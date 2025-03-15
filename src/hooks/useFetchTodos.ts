import { fetchTodos } from "@/lib/todoApi";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

const useFetchTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useFetchTodos;
