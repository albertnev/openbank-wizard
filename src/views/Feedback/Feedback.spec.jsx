/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Feedback from './Feedback';

describe('Feedback component', () => {
  const defaultProps = {
    onContinue: jest.fn(),
    success: true,
  };

  const renderComponent = (props = {}) =>
    render(<Feedback {...defaultProps} {...props} />);

  it('renders the component correctly', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-feedback-title')).toBeInTheDocument();
  });

  it('does not display the corporative title component', () => {
    renderComponent();
    expect(screen.queryByTestId('wizard-title')).not.toBeInTheDocument();
  });

  it('executes the provided onContinue method when clicking the continue button', () => {
    renderComponent();
    userEvent.click(screen.getByTestId('wizard-feedback-continue-button'));
    expect(defaultProps.onContinue).toHaveBeenCalled();
  });

  it('displays the correct content when success prop is false', () => {
    renderComponent({ success: false });
    expect(screen.getByText('T_couldNotSetMasterKey')).toBeInTheDocument();
  });

  it('displays the correct content when success prop is true', () => {
    renderComponent({ success: true });
    expect(
      screen.queryByText('T_couldNotSetMasterKey')
    ).not.toBeInTheDocument();
  });
});
