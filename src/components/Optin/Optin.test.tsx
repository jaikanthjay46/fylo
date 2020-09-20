import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Optin from './Optin';

describe('<Optin />', () => {
  test('it should mount', () => {
    render(<Optin />);
    
    const optin = screen.getByTestId('Optin');

    expect(optin).toBeInTheDocument();
  });
});