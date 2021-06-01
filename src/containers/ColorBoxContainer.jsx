import React from 'react';
import { useRecord } from '../components/hooks/useRecord';

const ColorBoxContainer = () => {
  const { current, undo, redo, record, index } = useRecord('#FF0000');

  return (
    <>
      <button aria-label="undo" onClick={undo} disabled={index === 0}>
        UNDO
      </button>

      <button
        aria-label="redo"
        onClick={redo}
        disabled={index === current.length - 1}
      >
        REDO
      </button>

      <input
        aria-label="colors"
        type="color"
        id="colors"
        value={current[index]}
        onChange={({ target }) => record(target.value)}
      />

      <div
        data-testid="color-box"
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
