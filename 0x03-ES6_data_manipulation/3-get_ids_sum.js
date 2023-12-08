export default function getStudentIdsSum(studentsList) {
  const sumofIds = studentsList.reduce((acc, cur) => acc + cur.id, 0);
  return sumofIds;
}
