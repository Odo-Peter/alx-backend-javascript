export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';
  let res;

  try {
    res = mathFunction();
  } catch (err) {
    res = `${err.name}: ${err.message}`;
  }

  queue.push(res, msg);

  return queue;
}
