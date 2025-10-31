import { TASK_ACTIONS } from "../constants/taskActions";
import type { Task } from "../interfaces/task.interface";

export type Action =
  | { type: typeof TASK_ACTIONS.ADD_TASK; payload: string }
  | { type: typeof TASK_ACTIONS.DELETE_TASK; payload: string }
  | { type: typeof TASK_ACTIONS.TOGGLE_TASK_COMPLETION; payload: string }
  | {
      type: typeof TASK_ACTIONS.EDIT_TASK;
      payload: { id: string; newDescription: string };
    };

export const taskReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case TASK_ACTIONS.ADD_TASK: {
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          description: action.payload,
          isCompleted: false,
        },
      ];
    }
    case TASK_ACTIONS.TOGGLE_TASK_COMPLETION: {
      return tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    }
    case TASK_ACTIONS.EDIT_TASK: {
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.newDescription,
          };
        }
        return task;
      });
    }
    case TASK_ACTIONS.DELETE_TASK: {
      return tasks.filter((task) => task.id !== action.payload);
    }
    default:
      return tasks;
  }
};