/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardTitle from './WizardTitle';

describe('WizardTitle component', () => {
  const defaultProps = { title: 'Test title' };
  const renderComponent = (props = {}) =>
    render(<WizardTitle {...defaultProps} {...props} />);

  it('renders correctly the component', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-title')).toBeInTheDocument();
  });

  it('displays the title provided', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });
});
