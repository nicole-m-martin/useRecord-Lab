import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorBoxContainer from '../containers/ColorBoxContainer';
/**
 * @jest-environment jsdom
 */

describe('ColorBoxContainer', () => {
  it('should render different colors and redo/undo with button clicks', () => {
    render(<ColorBoxContainer />);

    const color = screen.getByTestId('color-box');
    expect(color.style.backgroundColor).toEqual('rgb(255, 0, 0)');
  });
});
