import { useState } from "react";
import { TASK_VALIDATION } from "../../constants/validation";
import { validateTask } from "../../utils/taskValidation";
import s from "./TodoInput.module.css";

interface Props {
  onAddTask: (desciption: string) => void;
}

export const TodoInput: React.FC<Props> = ({ onAddTask }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const validationError = validateTask(value);

    if (validationError) {
      setError(validationError);
      return;
    }

    onAddTask(value.trim());
    setValue("");
    setError(null);
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
      handleSubmit();
    }
  };

  const remainingChars = TASK_VALIDATION.MAX_LENGTH - value.length;
  const isNearLimit = remainingChars <= 20;

  return (
    <div className={s.container}>
      <div className={s.input_group}>
        <input
          value={value}
          onChange={handleChange}
          className={s.container__input}
          type="text"
          placeholder="Add a new task..."
          onKeyDown={handleKeyDown}
          aria-invalid={!!error}
          aria-describedby={error ? "input-error" : undefined}
        />
        {isNearLimit && (
          <span className={s.char_counter}>
            {remainingChars} characters remaining
          </span>
        )}
        <button
          onClick={handleSubmit}
          className={s.container__button}
          disabled={value.length < TASK_VALIDATION.MIN_LENGTH}
        >
          Add
        </button>
      </div>
      {error && (
        <p id="input-error" className={s.error_message} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};