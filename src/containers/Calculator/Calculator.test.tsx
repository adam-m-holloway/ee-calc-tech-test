import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('should render the calculator', () => {
    render(<Calculator />);

    for (let i = 0; i < 10; i++) {
      expect(screen.getByText(`${i}`)).toBeInTheDocument();
    }

    const symbols = ['x', '-', '.', '+', '=', '÷', 'Clear'];
    symbols.forEach((symbol) => {
      expect(screen.getByText(symbol)).toBeInTheDocument();
    });
  });

  it('should render the logo', () => {
    render(<Calculator />);

    expect(screen.getByAltText('EE logo')).toBeInTheDocument();
  });

  it('should add two values', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['2', '+', '3', '='];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('5');
  });

  it('should multiply two values', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['3', 'x', '7', '='];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('21');
  });

  it('should subtract two values', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['6', '-', '2', '='];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('4');
  });

  it('should divide two values', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['8', '÷', '4', '='];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('2');
  });

  it('should calculate numbers with decimal places', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['2', '.', '7', '5', 'x', '2', '='];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('5.5');
  });

  it('should handle multiple values and operators', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['3', 'x', '2', '+', '8', '='];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('14');
  });

  it('should clear all entries', () => {
    const { getByText, getByTestId } = render(<Calculator />);

    const calcs = ['3', 'x', '2', 'Clear'];

    calcs.forEach((calc) => {
      fireEvent.click(getByText(calc));
    });

    expect(getByTestId('entry')).toHaveTextContent('');
  });
});
