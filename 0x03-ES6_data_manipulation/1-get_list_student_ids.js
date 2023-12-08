export default function getListStudentIds(objs) {
  if (!Array.isArray(objs)) return [];

  const ids = objs.map((el) => el.id);

  return ids;
}
