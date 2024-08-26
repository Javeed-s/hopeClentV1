import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useAsyncStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = React.useState<any>(async () => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = async (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useAsyncStorage;
