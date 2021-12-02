import { useState } from 'react';

const useLocalStorage = (key, value) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            if (item) return JSON.parse(item);
            return value;
        } catch (error) {
            console.log(error);
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
