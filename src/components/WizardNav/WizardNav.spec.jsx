/* eslint-disable testing-library/no-node-access */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardNav from './WizardNav';

describe('WizardNav component', () => {
  const defaultProps = {
    numberOfSteps: 4,
    currentStep: 1,
  };

  const renderComponent = (props = {}) =>
    render(<WizardNav {...defaultProps} {...props} />);

  const getComponent = (testid = 'wizard-nav-container') =>
    screen.queryByTestId(testid);

  it('renders the component correctly', () => {
    renderComponent();
    expect(getComponent()).toBeInTheDocument();
  });

  it('displays all steps provided with numbers', () => {
    renderComponent();
    expect(screen.queryAllByTestId('wizard-nav-step')).toHaveLength(4);
    expect(screen.queryAllByTestId('wizard-nav-line')).toHaveLength(3);

    expect(screen.queryAllByTestId('wizard-nav-step')[0]).toHaveTextContent(1);
    expect(screen.queryAllByTestId('wizard-nav-step')[3]).toHaveTextContent(4);
  });

  it('displays previous steps and lines as completed', () => {
    renderComponent({ currentStep: 3 });
    const navSteps = screen.queryAllByTestId('wizard-nav-step');
    const navLines = screen.queryAllByTestId('wizard-nav-line');

    expect(navSteps[0]).toHaveClass('completedStep');
    expect(navSteps[0].getElementsByTagName('svg')[0]).not.toBeUndefined();
    expect(navSteps[0]).not.toHaveTextContent('1');

    expect(navSteps[1]).toHaveClass('completedStep');
    expect(navSteps[1].getElementsByTagName('svg')[0]).not.toBeUndefined();
    expect(navSteps[1]).not.toHaveTextContent('2');

    expect(navSteps[2]).not.toHaveClass('completedStep');
    expect(navSteps[2].getElementsByTagName('svg')[0]).toBeUndefined();
    expect(navSteps[2]).toHaveTextContent('3');

    expect(navLines[0]).toHaveClass('completedStep');
    expect(navLines[1]).toHaveClass('completedStep');
    expect(navLines[2]).not.toHaveClass('completedStep');
  });

  it('provides visual feedback to show current step', () => {
    renderComponent({ currentStep: 3 });
    expect(screen.queryAllByTestId('wizard-nav-step')[2]).toHaveClass(
      'activeStep'
    );
  });
});
