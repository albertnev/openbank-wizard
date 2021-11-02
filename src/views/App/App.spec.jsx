import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<App {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
});
