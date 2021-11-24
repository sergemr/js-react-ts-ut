import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApiComponent from './ApiComponent';

describe('<ApiComponent />', () => {
  test('it should mount', () => {
    render(<ApiComponent />);
    
    const apiComponent = screen.getByTestId('ApiComponent');

    expect(apiComponent).toBeInTheDocument();
  });
});