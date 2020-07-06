import React from 'react';
import { render, screen } from '@testing-library/react';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('should render the calculator', () => {
    render(<Calculator />);

    for (let i = 0; i < 10; i++) {
      expect(screen.getByText(`${i}`)).toBeInTheDocument();
    }

    const symbols = ['x', '-', '.', '+', '=', '/', 'Clear'];
    symbols.forEach((symbol) => {
      expect(screen.getByText(symbol)).toBeInTheDocument();
    });
  });
});
