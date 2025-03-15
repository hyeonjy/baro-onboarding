import useAddTodo from "./useAddTodo";
import useDeleteTodo from "./useDeleteTodo";
import useFetchTodos from "./useFetchTodos";
import useToggleTodo from "./useToggleTodo";

const useTodos = () => {
  const fetchTodos = useFetchTodos();
  const addTodo = useAddTodo();
  const deleteTodo = useDeleteTodo();
  const toggleTodo = useToggleTodo();

  return {
    fetchTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};

export default useTodos;
