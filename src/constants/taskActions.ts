export const TASK_ACTIONS = {
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TASK_COMPLETION: "TOGGLE_TASK_COMPLETION",
  EDIT_TASK: "EDIT_TASK",
} as const;

export type TaskActionType = (typeof TASK_ACTIONS)[keyof typeof TASK_ACTIONS];