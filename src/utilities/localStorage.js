const getData = (key) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  key = "";
  return [];
};

const setData = (obj, key) => {
  const { id } = obj;

  const storedData = getData(key);
  const exits = storedData.find((elemId) => elemId.id === id);
  if (!exits) {
    storedData.push(obj);
    localStorage.setItem(key, JSON.stringify(storedData));
    return false;
  }
  return true;
};

export { setData, getData };
