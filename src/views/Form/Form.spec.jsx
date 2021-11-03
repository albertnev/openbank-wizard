/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component', () => {
  const getInputs = () => ({
    passwordInput: screen.getByTestId('wizard-form-password-input-control'),
    repeatPasswordInput: screen.getByTestId(
      'wizard-form-repeat-password-input-control'
    ),
    hintInput: screen.getByTestId('wizard-form-hint-input-control'),
  });

  const validPassword = 'testMYP4S*';
  const defaultProps = {
    onContinue: jest.fn(),
    onCancel: jest.fn(),
  };

  const renderComponent = (props = {}) =>
    render(<Form {...defaultProps} {...props} />);

  it('renders the component correctly', () => {
    renderComponent();
    expect(
      screen.getByTestId('wizard-form-password-inputs-container')
    ).toBeInTheDocument();
  });

  it('displays two password inputs and one text input on its first render', () => {
    renderComponent();
    const { passwordInput, repeatPasswordInput, hintInput } = getInputs();

    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(repeatPasswordInput).toHaveAttribute('type', 'password');
    expect(hintInput).toHaveAttribute('type', 'text');
  });

  it('calls the provided onContinue method when pressing the continue button and the form has been validated', () => {
    renderComponent();
    const { passwordInput, repeatPasswordInput } = getInputs();

    userEvent.type(passwordInput, validPassword);
    userEvent.type(repeatPasswordInput, validPassword);

    userEvent.click(screen.getByTestId('form-continue-button'));
    expect(defaultProps.onContinue).toHaveBeenCalled();
  });

  it('does not call the provided onContinue method if the form has not been successfully validated', () => {
    renderComponent();
    userEvent.click(screen.getByTestId('form-continue-button'));
    expect(defaultProps.onContinue).not.toHaveBeenCalled();
  });

  it('calls the provided onCancel method when pressing the cancel button', () => {
    renderComponent();
    userEvent.click(screen.getByTestId('form-cancel-button'));
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  it('displays an error message if both passwords do not match, clears the message once they do', async () => {
    renderComponent();
    const { passwordInput, repeatPasswordInput } = getInputs();

    userEvent.type(passwordInput, 'abcde');
    userEvent.type(repeatPasswordInput, 'fghijk');

    expect(screen.getByTestId('wizard-form-error-message')).toBeInTheDocument();

    userEvent.clear(repeatPasswordInput);
    userEvent.type(repeatPasswordInput, 'abcde');

    expect(
      screen.queryByTestId('wizard-form-error-message')
    ).not.toBeInTheDocument();
  });

  it('does not enable the continue button unless both passwords match and have at least uppercase, number, special character and 8 chars long', () => {
    renderComponent();

    const continueButton = screen.getByTestId('form-continue-button');
    expect(continueButton).toHaveAttribute('disabled');

    const { passwordInput, repeatPasswordInput } = getInputs();

    // Lower characters
    userEvent.type(passwordInput, 'a');
    userEvent.type(repeatPasswordInput, 'a');
    expect(continueButton).toHaveAttribute('disabled');

    // Numbers
    userEvent.type(passwordInput, '8');
    userEvent.type(repeatPasswordInput, '8');
    expect(continueButton).toHaveAttribute('disabled');

    // Special characters
    userEvent.type(passwordInput, '*');
    userEvent.type(repeatPasswordInput, '*');
    expect(continueButton).toHaveAttribute('disabled');

    // Uppercase
    userEvent.type(passwordInput, 'A');
    userEvent.type(repeatPasswordInput, 'A');
    expect(continueButton).toHaveAttribute('disabled');

    // At least 8 characters
    userEvent.type(passwordInput, 'left');
    userEvent.type(repeatPasswordInput, 'left');

    expect(continueButton).not.toHaveAttribute('disabled', 'true');
  });
});
