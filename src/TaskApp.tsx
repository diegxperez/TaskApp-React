import { useReducer, useRef } from "react";
import { taskReducer } from "./reducer/taskReducer";

import { Navbar } from "./components/Navbar/Navbar";
import { TabsList } from "./components/TabsList/TabsList";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { TodoList } from "./components/TodoList/TodoList";

import { mockdata } from "./mock-data/mock-data";

export const TaskApp = () => {
  const [state, dispatch] = useReducer(taskReducer, mockdata);
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
    dispatch({ type: "DELETE-TASK", payload: id });
  };

  const editTask = (id: string, newDescription: string) => {
    dispatch({ type: "EDIT_TASK", payload: { id, newDescription } });
  };

  return (
    <>
      <Navbar />
      <TaskInput taskRef={inputRef} onAddTask={addTask} />
      <TabsList />
      <TodoList
        tasks={state}
        onCheckedTask={completedTask}
        onDeletedTask={deleteTask}
        onEditTask={editTask}
      />
    </>
  );
};
