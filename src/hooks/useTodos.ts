import useAddTodo from "./useAddTodo";
import useDeleteTodo from "./useDeleteTodo";
import useFetchTodos from "./useFetchTodos";
import useToggleTodo from "./useToggleTodo";
import useUpdateTodo from "./useUpdateTodo";

const useTodos = () => {
  const fetchTodos = useFetchTodos();
  const addTodo = useAddTodo();
  const deleteTodo = useDeleteTodo();
  const toggleTodo = useToggleTodo();
  const updateTodo = useUpdateTodo();

  return {
    fetchTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
  };
};

export default useTodos;
