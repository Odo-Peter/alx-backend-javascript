export default function getStudentsByLocation(studentsList, city) {
  const results = studentsList.filter((el) => el.location === city);

  return results;
}
