import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardLoader from './WizardLoader';

describe('WizardLoader component', () => {
  const renderComponent = () => render(<WizardLoader />);

  it('renders correctly the component', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-loader')).toBeInTheDocument();
  });
});
