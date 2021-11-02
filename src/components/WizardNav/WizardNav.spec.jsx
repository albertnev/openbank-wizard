import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardNav from './WizardNav';

describe('WizardNav component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardNav {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo('displays all steps provided with numbers');
  it.todo('displays previous steps and lines as completed');
});
