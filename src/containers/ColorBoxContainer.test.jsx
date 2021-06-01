import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ColorBoxContainer from '../containers/ColorBoxContainer';
/**
 * @jest-environment jsdom
 */

describe('ColorBoxContainer', () => {
  it('should render different colors and redo/undo with button clicks', () => {
    render(<ColorBoxContainer />);

    const color = screen.getByTestId('color-box');
    expect(color.style.backgroundColor).toEqual('rgb(255, 0, 0)');

    // Start with Red Box
    const input = screen.getByLabelText('colors');
    fireEvent.input(input, { target: { value: '#FF0000' } });

    //Change to Blue Box
    fireEvent.input(input, { target: { value: '#0000FF' } });

    //Change to Green Box
    fireEvent.input(input, { target: { value: '#00FF00' } });
    expect(color.style.backgroundColor).toEqual('rgb(0, 255, 0)');

    // Undo color change back to Blue
    const undo = screen.getByRole('button', { name: 'undo' });
    fireEvent.click(undo);
    expect(color.style.backgroundColor).toEqual('rgb(0, 0, 255)');

    // Redo color change back to Green
    const redo = screen.getByRole('button', { name: 'redo' });
    fireEvent.click(redo);
    expect(color.style.backgroundColor).toEqual('rgb(0, 255, 0)');
  });
});
