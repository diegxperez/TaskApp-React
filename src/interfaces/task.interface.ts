export interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface TaskCounts {
  all: number;
  completed: number;
  pending: number;
}
