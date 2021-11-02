import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardIcon from './WizardIcon';

describe('WizardIcon component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardIcon {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders correctly the component');
  it.todo('renders the component with the size provided');
});
