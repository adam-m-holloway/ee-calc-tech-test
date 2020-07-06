import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('Should render the app', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('calc')).toBeInTheDocument();
  });
});
