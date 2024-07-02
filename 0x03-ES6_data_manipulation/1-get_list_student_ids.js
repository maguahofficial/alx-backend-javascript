const getListStudentIds = (myArrayv) => {
  if (!Array.isArray(myArrayv)) {
    return [];
  }
  return myArrayv.map((studentId) => studentId.id);
};

export default getListStudentIds;
