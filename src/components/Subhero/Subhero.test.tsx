import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from './Subhero';

describe('<Hero />', () => {
  test('it should mount', () => {
    render(<Hero />);
    
    const hero = screen.getByTestId('Subhero');

    expect(hero).toBeInTheDocument();
  });
});