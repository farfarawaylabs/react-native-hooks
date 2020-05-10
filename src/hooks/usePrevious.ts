import { useEffect, useRef } from 'react';

/**
 * Save a value that will be saved between component renders.
 * Allows you to compare previous value with current value
 */
const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
