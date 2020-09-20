import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Feature from './Feature';

describe('<Feature />', () => {
  test('it should mount', () => {
    render(<Feature />);
    
    const feature = screen.getByTestId('Feature');

    expect(feature).toBeInTheDocument();
  });
});