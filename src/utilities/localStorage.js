const getData = (key) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  key = "";
  return [];
};

const checkExist = (obj, key) => {
  const { id } = obj;
  const storedData = getData(key);
  const exits = storedData.find((elemId) => elemId.id === id);
  if (!exits) {
    return false;
  }
  return true;
};

const setData = (obj, key) => {
  const exists = checkExist(obj, key);
  if (!exists) {
    const storedData = getData(key);
    storedData.push(obj);
    localStorage.setItem(key, JSON.stringify(storedData));
  }
};

const setWishlist = (obj) => {
  const wishlist = getData("wishlist");
  const newWishlist = wishlist.filter((item) => item.id !== obj.id);
  localStorage.setItem("wishlist", JSON.stringify(newWishlist));
};

export { setData, getData, checkExist, setWishlist };
