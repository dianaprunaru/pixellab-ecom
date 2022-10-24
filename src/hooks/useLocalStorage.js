import { useEffect, useState } from 'react';

export const useLocalStorage = (keyName, defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const savedValue = localStorage.setItem(keyName);

    if (savedValue !== null) {
      setValue(savedValue);
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem(keyName, value);
  }, [value]);

  return [value, setValue];
};
