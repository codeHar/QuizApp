import { useState } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) return storedValue;
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setItem = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return { value, setItem };
}
