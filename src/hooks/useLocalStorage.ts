import { useCallback, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localstorage key "${key}"`, error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        setStoredValue((prevValue) => {
          const valueToStore =
            value instanceof Function ? value(prevValue) : value;

          window.localStorage.setItem(key, JSON.stringify(valueToStore));

          return valueToStore;
        });
      } catch (error) {
        console.error(`Error setting localStorage key "${key}"`, error);
      }
    },
    [key],
  );

  return [storedValue, setValue];
};
