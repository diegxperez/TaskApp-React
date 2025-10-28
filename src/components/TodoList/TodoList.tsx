import type { Task } from "../../interfaces/task.interface";
import { TodoItem } from "./TodoItem/TodoItem";
import s from "./TodoList.module.css";

interface Props {
  tasks: Task[];
  onCheckedTask: (id: string) => void;
  onDeletedTask: (id: string) => void;
  onEditTask: (id: string, newDescription: string) => void;
}

export const TodoList: React.FC<Props> = ({
  tasks,
  onCheckedTask,
  onDeletedTask,
  onEditTask,
}) => {
  return (
    <div className={s.todo_list}>
      {tasks.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          description={item.description}
          isCompleted={item.isCompleted}
          onCheckedTask={onCheckedTask}
          onDeletedTask={onDeletedTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};
