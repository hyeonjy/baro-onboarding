import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { fetchTodos } from "@/lib/todoApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Home = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Todo List</h1>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ErrorBoundary>
          <TodoInput />
        </ErrorBoundary>

        <ErrorBoundary>
          <TodoList />
        </ErrorBoundary>
      </HydrationBoundary>
    </div>
  );
};

export default Home;
