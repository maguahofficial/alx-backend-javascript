const updateUniqueItems = (map) => {
//10. More map data structure
  if (map instanceof Map) {
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
