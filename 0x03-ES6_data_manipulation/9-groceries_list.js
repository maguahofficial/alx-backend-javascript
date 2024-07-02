vi const groceriesList = () => {
  const resfun = new Map();
  const objetosfun = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objetosfun)) {
    resfun.set(key, objetosfun[key]);
  }
  return resfun;
};

export default groceriesList;
