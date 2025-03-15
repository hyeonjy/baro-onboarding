const TodoSkeleton = () => {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow animate-pulse"
        >
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-48" />
          </div>
          <div className="w-6 h-6 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
};

export default TodoSkeleton;
