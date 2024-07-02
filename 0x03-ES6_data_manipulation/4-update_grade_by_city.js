export default function updateStudentGradeByCity(studentsvr, city, newGrades) {
  if (!Array.isArray(studentsvr) || !Array.isArray(newGrades)) {
    return [];
  }

  const cityStudents = studentsvr.filter((studentvr) => studentvr.location === city).map((studentvr) => {
    const item2 = newGrades.find((student2) => studentvr.id === student2.studentId);

    return { ...studentvr, grade: item2 ? item2.grade : 'N/A' };

  });
  return cityStudents;
}
