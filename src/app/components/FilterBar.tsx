'use client';

import React from "react";

export type Filter = "all" | "active" | "completed";

interface FilterBarProps {
  filter: Filter;
  onChange: (filter: Filter) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, onChange }) => {
  return (
    <div className="flex gap-2 justify-center mb-6">
      <button
        className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}
        onClick={() => onChange("all")}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}
        onClick={() => onChange("active")}
      >
        Active
      </button>
      <button
        className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"}`}
        onClick={() => onChange("completed")}
      >
        Completed
      </button>
    </div>
  );
}; 