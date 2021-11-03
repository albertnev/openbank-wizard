/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WizardButton from './WizardButton';

describe('WizardButton component', () => {
  const defaultProps = {
    text: 'button',
    onClick: jest.fn(),
    disabled: false,
    isLink: false,
  };

  const getComponent = (testid = 'wizard-button') => screen.getByTestId(testid);

  const renderComponent = (props = {}) =>
    render(<WizardButton {...defaultProps} {...props} />);

  it('renders correctly the component', () => {
    renderComponent();
    expect(getComponent()).toBeInTheDocument();
  });

  it('calls the provided onClick method when clicked', () => {
    renderComponent();
    userEvent.click(getComponent());

    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('disables button when disabled prop is sent as true', () => {
    renderComponent({ disabled: true });
    expect(getComponent()).toBeDisabled();
  });

  it('does not call the provided onClick method when it is disabled', () => {
    renderComponent({ disabled: true });

    userEvent.click(getComponent());
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it('does have a specific class applied when isLink prop is true', () => {
    renderComponent({ isLink: true });
    expect(getComponent()).toHaveClass('actionLink');
  });

  it('renders the text correctly when it is provided as a string', () => {
    renderComponent({ text: 'myText' });
    expect(getComponent()).toHaveTextContent('myText');
  });

  it('renders the text correctly when it is provided as a method', () => {
    renderComponent({ text: () => 'myMethodText' });
    expect(getComponent()).toHaveTextContent('myMethodText');
  });

  it('applies correctly the data-testid prop', () => {
    renderComponent({ 'data-testid': 'testing' });
    expect(getComponent('wizard-button-testing')).toBeInTheDocument();
  });
});
