import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

describe('<Counter />', () => {
  test('it should mount', () => {
    render(<Counter />);
    
    const counter = screen.getByTestId('Counter');

    expect(counter).toBeInTheDocument();
  });
});

describe('<ButtonWrapper />', () => {
  test('handles onclick', () => {
    
    render(<Counter/>);

    const divElement = screen.getByRole('contentinfo');
    const buttonElement = screen.getByText('Add One');
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("Count is: 1");
  });
});

describe('<ButtonWrapper />', () => {
  test('handles onclick', () => {
    
    render(<Counter/>);

    const divElement = screen.getByRole('contentinfo');
    const buttonElement = screen.getByText('Minus One');
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("Count is: -1");
  });
});