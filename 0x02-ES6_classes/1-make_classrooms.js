import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const data = [19, 20, 34];
  const results = data.map((el) => new ClassRoom(el));

  return results;
}
