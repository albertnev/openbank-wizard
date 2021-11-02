import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardTitle from './WizardTitle';

describe('WizardTitle component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardTitle {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders correctly the component');
  it.todo('displays the title provided');
});
