/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardFooter from './WizardFooter';

describe('WizardFooter component', () => {
  const cancelButton = {
    text: 'cancelButtonText',
    onClick: jest.fn(),
    disabled: false,
  };

  const continueButton = {
    text: 'continueButtonText',
    onClick: jest.fn(),
    disabled: false,
  };

  const renderComponent = (props = {}) =>
    render(
      <WizardFooter
        cancelButton={cancelButton}
        continueButton={continueButton}
        {...props}
      />
    );

  it('renders correctly the component', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-footer')).toBeInTheDocument();
  });

  it('displays the cancel button if text is provided for it', () => {
    renderComponent();
    expect(screen.getByText(cancelButton.text)).toBeInTheDocument();
  });

  it('does not display the cancel button if text is not provided for it', () => {
    renderComponent({
      continueButton,
      cancelButton: { ...cancelButton, text: '' },
    });

    expect(screen.queryByText(cancelButton.text)).not.toBeInTheDocument();
  });

  it('cancel button is displayed as a link by default', () => {
    renderComponent();
    expect(screen.getByText(cancelButton.text)).toHaveClass('actionLink');
  });

  it('continue button is displayed as a button by default', () => {
    renderComponent();
    expect(screen.getByText(continueButton.text)).toHaveClass('actionButton');
  });

  it('displays the continue button if text is provided for it', () => {
    renderComponent();
    expect(screen.getByText(continueButton.text)).toBeInTheDocument();
  });

  it('does not displays the continue button if text is not provided for it', () => {
    renderComponent({
      cancelButton,
      continueButton: { ...continueButton, text: '' },
    });

    expect(screen.queryByText(continueButton.text)).not.toBeInTheDocument();
  });
});
