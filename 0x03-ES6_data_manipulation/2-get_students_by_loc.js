const getStudentsByLocation = (studentsvrb, city) => {
  const arratyObjec = studentsvrb.filter((funtion) => funtion.location === city);
  return arratyObjec;
};

export default getStudentsByLocation;
