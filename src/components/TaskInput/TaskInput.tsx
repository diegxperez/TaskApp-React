import s from "./TaskInput.module.css";

interface Props {
  taskRef: React.RefObject<HTMLInputElement | null>;
  onAddTask: () => void;
}

export const TaskInput: React.FC<Props> = ({ taskRef, onAddTask }) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddTask();
    }
  };

  return (
    <div className={s.container}>
      <input
        ref={taskRef}
        className={s.container__input}
        type="text"
        placeholder="Ingresar tarea"
        onKeyDown={handleKeyDown}
      />
      <button onClick={onAddTask} className={s.container__button}>
        Add
      </button>
    </div>
  );
};
