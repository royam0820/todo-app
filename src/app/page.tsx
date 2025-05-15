'use client';
import React, { useEffect, useState } from "react";
import { TodoList, Task } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { FilterBar, Filter } from "./components/FilterBar";

function getInitialTasks(): Task[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const addTask = (text: string) => {
    setTasks([
      ...tasks,
      { id: Date.now().toString(), text, completed: false },
    ]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const editTask = (id: string, newText: string) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700 dark:text-blue-300">To-Do List</h1>
      <TodoForm onAdd={addTask} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TodoList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
      <footer className="mt-12 text-gray-400 text-xs">Built with Next.js, React, and Tailwind CSS</footer>
    </div>
  );
}
