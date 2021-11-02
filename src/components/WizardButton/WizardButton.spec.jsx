import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardButton from './WizardButton';

describe('WizardButton component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardButton {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders correctly the component');
  it.todo('calls the provided onClick method when clicked');
  it.todo('applies specific styling when it is disabled');
  it.todo('does not call the provided onClick method when it is disabled');
  it.todo('does not have a button shape when isLink prop is true');
  it.todo('renders the text correctly when it is provided as a string');
  it.todo('renders the text correctly when it is provided as a method');
});
