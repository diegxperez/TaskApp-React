/**
      * Valida una descripción de tarea según las reglas
   definidas
      * @param text - Texto a validar
      * @returns String con mensaje de error o null si es
   válido
*/

import { TASK_VALIDATION } from "../constants/validation";

export const validateTask = (text: string): string | null => {
  const trimmed = text.trim();

  if (!trimmed) {
    return TASK_VALIDATION.ERROR_MESSAGES.ONLY_SPACES;
  }

  if (trimmed.length < TASK_VALIDATION.MIN_LENGTH) {
    return TASK_VALIDATION.ERROR_MESSAGES.MIN_LENGTH;
  }

  if (trimmed.length > TASK_VALIDATION.MAX_LENGTH) {
    return TASK_VALIDATION.ERROR_MESSAGES.MAX_LENGTH;
  }

  if (!TASK_VALIDATION.PATTERN.test(trimmed)) {
    return TASK_VALIDATION.ERROR_MESSAGES.INVALID_CHARS;
  }

  return null;
};