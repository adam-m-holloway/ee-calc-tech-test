import React from 'react';
import { render, screen } from '@testing-library/react';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('should render the calculator', () => {
    render(<Calculator />);

    expect(screen.getByText('Calculator component')).toBeInTheDocument();
  });
});
