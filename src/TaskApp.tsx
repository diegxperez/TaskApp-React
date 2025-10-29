import { useMemo, useReducer, useRef, useState } from "react";
import { taskReducer } from "./reducer/taskReducer";

import { Navbar } from "./components/Navbar/Navbar";
import { TabsList } from "./components/TabsList/TabsList";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";

import type { FilterType } from "./interfaces/filters.type";
import type { Task } from "./interfaces/task.interface";
import { mockdata } from "./mock-data/mock-data";

export const TaskApp = () => {
  const [state, dispatch] = useReducer(taskReducer, mockdata);
  const [filterType, setFilterType] = useState<FilterType>("all");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    const inputValue = inputRef.current?.value.trim();
    if (inputValue) {
      dispatch({
        type: "ADD_TASK",
        payload: inputValue,
      });
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const completedTask = (id: string) => {
    dispatch({
      type: "TOGGLE_TASK_COMPLETION",
      payload: id,
    });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const editTask = (id: string, newDescription: string) => {
    dispatch({ type: "EDIT_TASK", payload: { id, newDescription } });
  };

  const getFilteredTasks = (): Task[] => {
    switch (filterType) {
      case "all":
        return state;
      case "completed":
        return state.filter((task) => task.isCompleted);
      case "pending":
        return state.filter((task) => !task.isCompleted);
      default:
        return state;
    }
  };

  const filteredTasks = getFilteredTasks();

  const taskCounts = useMemo(() => {
    return {
      all: state.length,
      completed: state.filter((task) => task.isCompleted).length,
      pending: state.filter((task) => !task.isCompleted).length,
    };
  }, [state]);

  return (
    <>
      <Navbar />
      <TodoInput taskRef={inputRef} onAddTask={addTask} />
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
