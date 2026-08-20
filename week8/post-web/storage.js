const posts_key = "posts:key"

export const saveLocalStorage = (value) => {
  const stringfiedValue = JSON.stringify(value);
  localStorage.setItem(posts_key, stringfiedValue);
}


export const getLocalStorage = () => {
  const rawData = localStorage.getItem(posts_key);
  if (!rawData) {
    return [];
  }
  const parsedData = JSON.parse(rawData);
  return parsedData;
}