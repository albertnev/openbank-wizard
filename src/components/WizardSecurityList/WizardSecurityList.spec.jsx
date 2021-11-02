import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardSecurityList from './WizardSecurityList';

describe('WizardSecurityList component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardSecurityList {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo('displays the conditions strings provided');
  it.todo('provides visual feedback for succeeded conditions');
  it.todo('provides visual feedback for unsucceeded conditions');
});
