import { useRef } from "react";
import s from "./EditModal.module.css";

interface Props {
  id: string;
  description: string;
  onEditTask: (id: string, newDescription: string) => void;
  onCloseModal: () => void;
}

export const EditModal: React.FC<Props> = ({
  id,
  description,
  onCloseModal,
  onEditTask,
}) => {
  const inputNewDescription = useRef<HTMLInputElement | null>(null);

  const handleEditDescription = () => {
    const newDescription = inputNewDescription.current?.value.trim();
    if (newDescription) {
      onEditTask(id, newDescription);
      alert("Nueva descripcion añadida");
    }
  };

  return (
    <div className={s.modal__overlay}>
      <div className={s.modal__container}>
        <div className={s.container}>
          <button onClick={onCloseModal} className={s.btn__close}>
            Cerrar
          </button>
          <input
            ref={inputNewDescription}
            className={s.modal__input}
            defaultValue={description}
            type="text"
            placeholder="Ingresar tarea"
          />
          <button
            className={s.btn__edit}
            onClick={() => handleEditDescription()}
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};
