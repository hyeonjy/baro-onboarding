import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Home = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Todo List</h1>
      <ErrorBoundary>
        <TodoInput />
      </ErrorBoundary>

      <ErrorBoundary>
        <TodoList />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
