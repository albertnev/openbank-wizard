/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductInformation from './ProductInformation';

describe('ProductInformation component', () => {
  const defaultProps = {
    onContinue: jest.fn(),
  };

  const renderComponent = (props = {}) =>
    render(<ProductInformation {...defaultProps} {...props} />);

  it('renders the component correctly', () => {
    renderComponent();
    expect(
      screen.getByTestId('wizard-product-information-product-summary')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('wizard-product-information-how-it-works')
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('wizard-product-information-save-data')
    ).toBeInTheDocument();
  });

  it('calls the provided onContinue method when continue button is clicked', () => {
    renderComponent();
    userEvent.click(screen.getByTestId('product-information-continue-button'));

    expect(defaultProps.onContinue).toHaveBeenCalled();
  });
});
