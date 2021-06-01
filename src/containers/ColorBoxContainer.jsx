import React from 'react';
import { useRecord } from '../components/hooks/useRecord';

const ColorBoxContainer = () => {
  const { current, undo, redo, record, index } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undo} disabled={index === 0}>
        UNDO
      </button>

      <button onClick={redo} disabled={index === current.length - 1}>
        REDO
      </button>

      <input
        type="color"
        value={current[index]}
        onChange={({ target }) => record(target.value)}
      />

      <div
        style={{
          backgroundColor: current[index],
          width: '10rem',
          height: '10rem',
        }}
      ></div>
    </>
  );
};

export default ColorBoxContainer;
