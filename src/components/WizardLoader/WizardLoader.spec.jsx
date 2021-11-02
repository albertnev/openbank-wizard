import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardLoader from './WizardLoader';

describe('WizardLoader component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardLoader {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders correctly the component');
});
