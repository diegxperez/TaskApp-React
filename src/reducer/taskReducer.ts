import type { Task } from "../interfaces/task.interface";

export type Action =
  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE-TASK"; payload: string }
  | { type: "TOGGLE_TASK_COMPLETION"; payload: string }
  | { type: "EDIT_TASK"; payload: { id: string; newDescription: string } };

export const taskReducer = (tasks: Task[], action: Action): Task[] => {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          description: action.payload,
          isCompleted: false,
        },
      ];
    }
    case "TOGGLE_TASK_COMPLETION": {
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
    case "EDIT_TASK": {
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
    case "DELETE-TASK": {
      return tasks.filter((task) => task.id !== action.payload);
    }
    default:
      return tasks;
  }
};
