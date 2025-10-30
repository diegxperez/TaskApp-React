import { useState, useEffect } from "react";
import { TASK_VALIDATION } from "../../../constants/validation";
import { validateTask } from "../../../utils/taskValidation";
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
  const [value, setValue] = useState(description);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onCloseModal]);

  const handleEditDescription = () => {
    const validationError = validateTask(value);

    if (validationError) {
      setError(validationError);
      return;
    }

    if (value.trim() === description) {
      onCloseModal();
      return;
    }

    onEditTask(id, value.trim());
    onCloseModal();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= TASK_VALIDATION.MAX_LENGTH) {
      setValue(newValue);
      setError(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEditDescription();
    }
  };

  return (
    <div className={s.modal__backdrop} onClick={handleBackdropClick}>
      <div className={s.modal__content}>
        <div className={s.modal__header}>
          <h3 className={s.modal__title}>Edit Task</h3>
          <button
            onClick={onCloseModal}
            className={s.btn__close}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className={s.modal__body}>
          <input
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={s.modal__input}
            type="text"
            placeholder="Enter task description"
            aria-invalid={!!error}
            aria-describedby={error ? "modal-error" : undefined}
            autoFocus
          />
          {error && (
            <p id="modal-error" className={s.error_message} role="alert">
              {error}
            </p>
          )}
        </div>

        <div className={s.modal__footer}>
          <button onClick={onCloseModal} className={s.btn__cancel}>
            Cancel
          </button>
          <button
            className={s.btn__save}
            onClick={handleEditDescription}
            disabled={value.length < TASK_VALIDATION.MIN_LENGTH}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};