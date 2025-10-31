import { useEffect, useMemo, useReducer } from "react";
import { taskReducer } from "../reducer/taskReducer";
import { mockdata } from "../mock-data/mock-data";
import { useLocalStorage } from "./useLocalStorage";
import type { Task } from "../interfaces/task.interface";
import type { FilterType } from "../interfaces/filters.type";
import { TASK_ACTIONS } from "../constants/taskActions";

const STORAGE_KEY = "tasks";

export const useTasks = () => {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>(
    STORAGE_KEY,
    mockdata,
  );

  const [state, dispatch] = useReducer(taskReducer, storedTasks);

  // Sincronizar: cada vez que state cambia, guardar en LocalStorage
  useEffect(() => {
    setStoredTasks(state);
  }, [state, setStoredTasks]);

  const addTask = (description: string) => {
    if (description.trim()) {
      dispatch({
        type: TASK_ACTIONS.ADD_TASK,
        payload: description,
      });
    }
  };

  const completedTask = (id: string) => {
    dispatch({
      type: TASK_ACTIONS.TOGGLE_TASK_COMPLETION,
      payload: id,
    });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: TASK_ACTIONS.DELETE_TASK, payload: id });
  };

  const editTask = (id: string, newDescription: string) => {
    dispatch({ type: TASK_ACTIONS.EDIT_TASK, payload: { id, newDescription } });
  };

  const getFilteredTasks = (filterType: FilterType): Task[] => {
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

  const taskCounts = useMemo(() => {
    return {
      all: state.length,
      completed: state.filter((task) => task.isCompleted).length,
      pending: state.filter((task) => !task.isCompleted).length,
    };
  }, [state]);

  return {
    tasks: state,
    taskCounts,
    addTask,
    completedTask,
    deleteTask,
    editTask,
    getFilteredTasks,
  };
};