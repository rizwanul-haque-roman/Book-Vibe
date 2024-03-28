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

// descending by rating: newItems.sort((a, b) => a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0)

const sortByRating = () => {
  const dataRead = getData("read");
  const dataWishlist = getData("wishlist");
  dataRead.sort((a, b) =>
    a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0
  );
  dataWishlist.sort((a, b) =>
    a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0
  );
  localStorage.setItem("read", JSON.stringify(dataRead));
  localStorage.setItem("wishlist", JSON.stringify(dataWishlist));
  window.location.reload();
};
const sortByPages = () => {
  const dataRead = getData("read");
  const dataWishlist = getData("wishlist");
  dataRead.sort((a, b) => (a.pages < b.pages ? 1 : a.pages > b.pages ? -1 : 0));
  dataWishlist.sort((a, b) =>
    a.pages < b.pages ? 1 : a.pages > b.pages ? -1 : 0
  );
  localStorage.setItem("read", JSON.stringify(dataRead));
  localStorage.setItem("wishlist", JSON.stringify(dataWishlist));
  window.location.reload();
};
const sortByYear = () => {
  const dataRead = getData("read");
  const dataWishlist = getData("wishlist");
  dataRead.sort((a, b) =>
    a.yearOfPublishing < b.yearOfPublishing
      ? 1
      : a.yearOfPublishing > b.yearOfPublishing
      ? -1
      : 0
  );
  dataWishlist.sort((a, b) =>
    a.yearOfPublishing < b.yearOfPublishing
      ? 1
      : a.yearOfPublishing > b.yearOfPublishing
      ? -1
      : 0
  );
  localStorage.setItem("read", JSON.stringify(dataRead));
  localStorage.setItem("wishlist", JSON.stringify(dataWishlist));
  window.location.reload();
};

export {
  setData,
  getData,
  checkExist,
  setWishlist,
  sortByRating,
  sortByPages,
  sortByYear,
};
