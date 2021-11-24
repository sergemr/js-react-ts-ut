import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Person from './Person';

describe('<Person />', () => {
  test('it should mount', () => {
    render(<Person name="TestName" />);
    
    const person = screen.getByTestId('Person');

    expect(person).toBeInTheDocument();
  });
});

describe('<Person />', () => {
  test('renders a Name', () => {
    render(<Person name="testName"/>);
    
    const person = screen.getByText('Name is testName');

    expect(person).toBeInTheDocument();
  });
});

describe('<Person />', () => {
  test('renders a Content', () => {
    render(<Person name="testName"/>);
    
    const person = screen.getByRole('contentinfo');

    expect(person).toHaveTextContent("Lorem Ipsum seta amit");
  });
});

describe('<Person />', () => {
  test('renders a Content', () => {
    render(<Person name="testName"/>);
    
    const person = screen.getByRole('main');

    expect(person).toHaveAttribute("role", "main" );
  });
});