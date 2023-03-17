import { useState } from 'react';

function Test() {
  const [number, setNumber] = useState(0);
  return <div onClick={() => setNumber((prev) => prev + 1)}>{number}</div>;
}
export default Test;
