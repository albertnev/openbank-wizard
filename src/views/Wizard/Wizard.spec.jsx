/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Wizard from './Wizard';
import { submitForm } from '../../services/api';

jest.mock('../../services/api');

describe('Wizard component', () => {
  const renderComponent = (props = {}) => render(<Wizard {...props} />);
  const validPassword = 'testMYP4S*';
  const validHint = 'An optional hint';

  const getFormInputs = () => ({
    passwordInput: screen.getByTestId('wizard-form-password-input-control'),
    repeatPasswordInput: screen.getByTestId(
      'wizard-form-repeat-password-input-control'
    ),
    hintInput: screen.getByTestId('wizard-form-hint-input-control'),
  });

  const writeAndSubmit = async (inputVal = validPassword) => {
    const { passwordInput, repeatPasswordInput, hintInput } = getFormInputs();

    userEvent.type(passwordInput, inputVal);
    userEvent.type(repeatPasswordInput, inputVal);
    userEvent.type(hintInput, validHint);

    await act(async () => {
      userEvent.click(screen.getByTestId('form-continue-button'));
    });
  };

  it('renders the component correctly', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-container')).toBeInTheDocument();
  });

  it('shows the ProductInformation page on the first step', () => {
    renderComponent({ currentStep: 1 });
    expect(
      screen.getByTestId('wizard-product-information-product-summary')
    ).toBeInTheDocument();
  });

  it('stays in the first screen if cancel button is pressed', () => {
    renderComponent({ currentStep: 1 });
    userEvent.click(screen.getByTestId('product-information-cancel-button'));
    expect(
      screen.getByTestId('wizard-product-information-product-summary')
    ).toBeInTheDocument();
  });

  it('shows the Form page on the second step', () => {
    renderComponent({ currentStep: 2 });
    expect(
      screen.getByTestId('wizard-form-password-inputs-container')
    ).toBeInTheDocument();
  });

  it('shows the ProductInformation page again if cancel is pressed on the second step', () => {
    renderComponent({ currentStep: 2 });
    userEvent.click(screen.getByTestId('form-cancel-button'));

    expect(
      screen.queryByTestId('wizard-form-password-inputs-container')
    ).not.toBeInTheDocument();
    expect(
      screen.getByTestId('wizard-product-information-product-summary')
    ).toBeInTheDocument();
  });

  it('shows the Feedback page on the third and last step', () => {
    renderComponent({ currentStep: 3 });
    expect(screen.getByTestId('wizard-feedback-title')).toBeInTheDocument();
  });

  it('sends the form data and increases the step when Form is submitted', async () => {
    submitForm.mockImplementation(() => ({ status: '200' }));
    renderComponent({ currentStep: 2 });
    await writeAndSubmit();

    expect(submitForm).toHaveBeenCalledWith(
      validPassword,
      validPassword,
      validHint
    );
    expect(
      screen.queryByTestId('wizard-form-password-inputs-container')
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('wizard-feedback-title')).toBeInTheDocument();
  });

  it('shows the loader when the form data is submitted and it is waiting for a response', async () => {
    submitForm.mockImplementation(
      async () => new Promise((resolve) => setTimeout(resolve, 1000))
    );
    renderComponent({ currentStep: 2 });
    await writeAndSubmit();

    expect(submitForm).toHaveBeenCalled();
    expect(screen.getByTestId('wizard-loader')).toBeInTheDocument();
  });

  it('shows the error Feedback page when the response is not successful', async () => {
    submitForm.mockImplementation(() => ({ status: 400 }));
    renderComponent({ currentStep: 2 });
    await writeAndSubmit();

    expect(screen.getByText('T_couldNotSetMasterKey')).toBeInTheDocument();
  });

  it('shows the success Feedback page when the response is successful', async () => {
    submitForm.mockImplementation(() => ({ status: 200 }));
    renderComponent({ currentStep: 2 });
    await writeAndSubmit();

    expect(
      screen.queryByText('T_couldNotSetMasterKey')
    ).not.toBeInTheDocument();
  });

  it('returns to the first step when the continue button is pressed on the last step', () => {
    renderComponent({ currentStep: 3 });
    userEvent.click(screen.getByTestId('wizard-feedback-continue-button'));

    expect(
      screen.getByTestId('wizard-product-information-product-summary')
    ).toBeInTheDocument();
  });
});
