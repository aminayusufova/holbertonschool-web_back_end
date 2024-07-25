export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cant divide by 0');
  }
  return (numerator / denominator);
}
