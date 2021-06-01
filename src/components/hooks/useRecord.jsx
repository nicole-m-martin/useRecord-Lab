/* eslint-disable max-len */
import { useState } from 'react';

export const useRecord = (init) => {
  const [current, setCurrent] = useState([init]);
  const [index, setIndex] = useState(0);

  const record = (value) => {
    setCurrent((previousState) => [
      ...previousState.slice(0, index + 1),
      value,
      ...previousState.slice(index + 1),
    ]);
    setIndex((previousState) => previousState + 1);
  };

  const undo = () => {
    setIndex((previousState) => previousState - 1);
  };

  const redo = () => {
    setIndex((previousState) => previousState + 1);
  };

  return { current, undo, redo, record, index };
};
