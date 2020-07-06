import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  test('Should render the app', () => {
    render(<App />);
    expect(screen.getByText('EE Calculator')).toBeInTheDocument();
  });
});
