import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentPage from './ContentPage';

describe('ContentPage component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<ContentPage {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo('does not display the header if hideTitle is provided as true');
  it.todo('displays the title provided successfully');
  it.todo('displays the children inside the component correctly');
  it.todo('displays the footer');
});
