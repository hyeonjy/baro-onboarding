import { Todo } from "@/app/types/todo";
import { fetchTodos } from "@/lib/todoApi";
import { useQuery } from "@tanstack/react-query";

const useFetchTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export default useFetchTodos;
