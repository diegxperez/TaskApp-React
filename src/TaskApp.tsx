import { useState } from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { TabsList } from "./components/TabsList/TabsList";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

import type { FilterType } from "./interfaces/filters.type";
import { useTasks } from "./hooks/useTasks";

export const TaskApp = () => {
  const {
    taskCounts,
    addTask,
    completedTask,
    deleteTask,
    editTask,
    getFilteredTasks,
  } = useTasks();

  const [filterType, setFilterType] = useState<FilterType>("all");

  const filteredTasks = getFilteredTasks(filterType);

  return (
    <>
      <Navbar />
      <TodoInput onAddTask={addTask} />
      <TabsList
        onFilterChange={setFilterType}
        currentFilter={filterType}
        taskCounts={taskCounts}
      />
      <TodoList
        tasks={filteredTasks}
        onCheckedTask={completedTask}
        onDeletedTask={deleteTask}
        onEditTask={editTask}
      />
    </>
  );
};
