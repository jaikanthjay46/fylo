import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Testimonials from './Testimonials';

describe('<Testimonials />', () => {
  test('it should mount', () => {
    render(<Testimonials />);
    
    const testimonials = screen.getByTestId('Testimonials');

    expect(testimonials).toBeInTheDocument();
  });
});