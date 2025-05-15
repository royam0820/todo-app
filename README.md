# To-Do List Web App

A simple, modern To-Do List application built with **Next.js 15**, **React**, and **Tailwind CSS**. Tasks are stored in the browser's localStorage for persistence.

## Features
- Add, edit, and delete tasks
- Mark tasks as completed or active
- Filter tasks by status (All, Active, Completed)
- Responsive and accessible UI
- Data persists in localStorage
- Built with modular, reusable React components

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Usage
- Use the input field to add new tasks.
- Click the checkbox to mark a task as completed or active.
- Use the Edit and Delete buttons to modify or remove tasks.
- Use the filter bar to view all, active, or completed tasks.
- Tasks are saved automatically in your browser.

## Project Structure
```
src/app/
  components/
    TodoList.tsx      # Task list display and actions
    TodoForm.tsx      # Add new task form
    FilterBar.tsx     # Filter tasks by status
  page.tsx            # Main app page (uses all components)
```

## Customization
- You can further style or extend the app by editing the components in `src/app/components/`.
- To reset all tasks, clear your browser's localStorage for this site.

## Taskmaster.ai Workflow

This project was planned and managed using [Taskmaster.ai](https://taskmaster.ai), an AI-powered task and project management tool.

### PRD Source
The initial Product Requirements Document (PRD) was:

```
To-Do List Web App
- Users can add, edit, and delete tasks.
- Tasks are stored in local storage.
- UI built with React and styled with Tailwind CSS.
- Features: task list display, form to add tasks, buttons to edit/delete.
- Stretch goal: Filter tasks by completion status.
```

### AI Models Used
- **Main:** OpenAI `gpt-4o`
- **Research:** OpenAI `gpt-4o-search-preview`
- **Fallback:** OpenAI `gpt-4o`

### Taskmaster.ai Actions Performed
- Parsed the PRD to generate an initial set of tasks
- Managed task dependencies, priorities, and statuses
- Provided a step-by-step development workflow
- Tracked progress and marked tasks as done/in-progress
- Helped break down features into modular components

### Example Tasks Generated
- Setup Project Repository
- Implement Task Storage in Local Storage
- Create Task List Display Component
- Develop Task Addition Form
- Implement Task Editing Functionality
- Implement Task Deletion Functionality
- Style Application with Tailwind CSS
- Implement Task Completion Status & Filtering
- Setup Testing Framework
- Write Unit Tests for Core Features

See `tasks/tasks.json` for the full list of generated and managed tasks.

---

Feel free to fork, modify, and use this project as a starting point for your own apps!
