const hasValuesFromArray = (set, array) => {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
};
//7. More set data structure
export default hasValuesFromArray;
