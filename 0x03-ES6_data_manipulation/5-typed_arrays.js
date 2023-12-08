/**
 * Create a buffer array with a given position set to the given value
 * @param {Number} length - The length 0f the buffer
 * @param {Number} position -  position to modify
 * @param {Number} value - Value to set at the position
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}
