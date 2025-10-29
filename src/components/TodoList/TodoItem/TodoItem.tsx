import { useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import s from "./TodoItem.module.css";

interface Props {
  id: string;
  description: string;
  isCompleted: boolean;
  onCheckedTask: (id: string) => void;
  onDeletedTask: (id: string) => void;
  onEditTask: (id: string, newDescription: string) => void;
}

export const TodoItem: React.FC<Props> = ({
  id,
  description,
  isCompleted,
  onCheckedTask,
  onDeletedTask,
  onEditTask,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.todoitem}>
      <input
        type="checkbox"
        onChange={() => onCheckedTask(id)}
        checked={isCompleted}
        className={s.todoitem_completed}
      />
      <p
        style={isCompleted ? { textDecoration: "line-through" } : {}}
        className={s.todoitem_description}
      >
        {description}
      </p>
      <div className={s.todoitem_actions}>
        <button onClick={handleToggleModal} className={s.todoitem_edit}>
          Editar
        </button>
        <button onClick={() => onDeletedTask(id)} className={s.todoitem_delete}>
          Eliminar
        </button>
      </div>
      {isOpen && (
        <EditModal
          onCloseModal={handleToggleModal}
          onEditTask={onEditTask}
          id={id}
          description={description}
        />
      )}
    </div>
  );
};
