import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CircleIcon from './CircleIcon';

describe('<CircleIcon />', () => {
  test('it should mount', () => {
    render(<CircleIcon />);
    
    const circleIcon = screen.getByTestId('CircleIcon');

    expect(circleIcon).toBeInTheDocument();
  });
});