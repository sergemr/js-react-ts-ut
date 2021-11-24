import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideBar from './SideBar';

describe('<SideBar />', () => {
  test('it should mount', () => {
    const items = [
      {
        name: 'test',
        href: 'test',
      }
    ]
    render(<SideBar items={items}/>);
    
    const anchorElements = screen.getAllByRole('menuitem');
     
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href",items[0].href);
  });
});