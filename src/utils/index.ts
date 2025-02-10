export const saveStorage = (key: string, value: any) => {
  typeof value === "string"
    ? localStorage.setItem(key, value)
    : localStorage.setItem(key, JSON.stringify(value));
};
export const getStorage = (key: string) => {
  let value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null; // Ensure parsed value is returned
};
export const clearStorage = (key: string) => {
  localStorage.removeItem(key);
};
