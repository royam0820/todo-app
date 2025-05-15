'use client';

import React from "react";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [editText, setEditText] = React.useState("");

  const startEdit = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleEdit = (id: string) => {
    onEdit(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <ul className="w-full max-w-md mx-auto space-y-2">
      {tasks.length === 0 && (
        <li className="text-gray-400 text-center">No tasks yet.</li>
      )}
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center justify-between bg-white dark:bg-gray-800 rounded shadow p-2 transition-all ${task.completed ? "opacity-60" : ""}`}
        >
          <div className="flex items-center gap-2 flex-1">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="accent-blue-500"
            />
            {editingId === task.id ? (
              <input
                className="border rounded px-2 py-1 flex-1"
                value={editText}
                onChange={e => setEditText(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") handleEdit(task.id);
                  if (e.key === "Escape") setEditingId(null);
                }}
                autoFocus
              />
            ) : (
              <span
                className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
              >
                {task.text}
              </span>
            )}
          </div>
          <div className="flex gap-1">
            {editingId === task.id ? (
              <>
                <button
                  className="text-blue-600 hover:underline px-2"
                  onClick={() => handleEdit(task.id)}
                >
                  Save
                </button>
                <button
                  className="text-gray-400 hover:underline px-2"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="text-blue-600 hover:underline px-2"
                  onClick={() => startEdit(task.id, task.text)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:underline px-2"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}; 