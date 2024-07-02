const getStudentIdsSum = (studentsvr) => {
  const id = studentsvr.reduce(
    (acc, value) => acc + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
