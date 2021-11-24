import React from 'react';
import { render, screen ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonWrapper from './ButtonWrapper';

describe('<ButtonWrapper />', () => {
  test('it should mount', () => {
    const onClick = jest.fn()
    render(<ButtonWrapper onClick={onClick} title={"mytitle"} />);
    
    const buttonWrapper = screen.getByTestId('ButtonWrapper');

    expect(buttonWrapper).toBeInTheDocument();
  });
});


describe('<ButtonWrapper />', () => {
  test('handles onclick', () => {
    const onClick = jest.fn()
    render(<ButtonWrapper onClick={onClick} title={"mytitle"} />);

    const buttonWrapper = screen.getByTestId('ButtonWrapper');
    fireEvent.click(buttonWrapper);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});