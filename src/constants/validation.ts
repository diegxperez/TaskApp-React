export const TASK_VALIDATION = {
  MAX_LENGTH: 100,
  MIN_LENGTH: 3,
  PATTERN: /^[a-zA-Z0-9\s\u00C0-\u017F.,!?áéíóúÁÉÍÓÚñÑ-]+$/,
  ERROR_MESSAGES: {
    MIN_LENGTH: "Task must be at least 3 characters",
    MAX_LENGTH: "Task cannot exceed 100 characters",
    INVALID_CHARS: "Task contains invalid characters",
    EMPTY: "Task cannot be empty",
    ONLY_SPACES: "Task cannot be only spaces",
  },
} as const;