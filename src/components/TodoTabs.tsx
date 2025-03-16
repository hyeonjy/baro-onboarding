"use client";

import { Dispatch, SetStateAction } from "react";

export type TabType = "all" | "active" | "completed";

interface TodoTabsProps {
  currentTab: TabType;
  setCurrentTab: Dispatch<SetStateAction<TabType>>;
}

const TodoTabs = ({ currentTab, setCurrentTab }: TodoTabsProps) => {
  const tabs = [
    { id: "all", label: "전체" },
    { id: "active", label: "진행중" },
    { id: "completed", label: "완료" },
  ] as const;

  return (
    <div className="relative mt-[80px]">
      <div className="flex justify-between mb-6 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`w-full px-4 py-2 text-lg font-medium text-center ${
              currentTab === tab.id
                ? "dark:text-white text-black"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700">
        <div
          className={`absolute h-0.5 bg-black dark:bg-white transition-all duration-300 ${
            currentTab === "all"
              ? "left-[0%] w-[33.33%]"
              : currentTab === "active"
              ? "left-[33.33%] w-[33.33%]"
              : "left-[66.66%] w-[33.33%]"
          }`}
        />
      </div>
    </div>
  );
};

export default TodoTabs;
