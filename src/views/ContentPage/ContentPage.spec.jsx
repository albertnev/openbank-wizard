/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContentPage from './ContentPage';

describe('ContentPage component', () => {
  const defaultProps = {
    title: 'My page title',
    footer: {
      cancelButton: {
        text: 'cancel button',
        onClick: jest.fn(),
      },
      continueButton: {
        text: 'continue button',
        onClick: jest.fn(),
      },
    },
  };

  const renderComponent = (
    props = {},
    children = <div data-testid="test-children">Test children</div>
  ) =>
    render(
      <ContentPage {...defaultProps} {...props}>
        {children}
      </ContentPage>
    );

  it('renders the component correctly', () => {
    renderComponent();
    expect(
      screen.getByTestId('wizard-content-page-container')
    ).toBeInTheDocument();
  });

  it('does not display the header if hideTitle is provided as true', () => {
    renderComponent({ hideTitle: true });
    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();
  });

  it('displays the title provided successfully', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('displays the children inside the component correctly', () => {
    renderComponent();
    expect(screen.getByTestId('test-children')).toBeInTheDocument();
  });

  it('displays the footer', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-footer')).toBeInTheDocument();
  });

  it('does not display the footer if it is not provided', () => {
    renderComponent({ footer: undefined });
    expect(screen.queryByTestId('wizard-footer')).not.toBeInTheDocument();
  });

  it('calls the callback methods provided in the buttons of the footer', () => {
    renderComponent();

    userEvent.click(screen.getByText(defaultProps.footer.cancelButton.text));
    userEvent.click(screen.getByText(defaultProps.footer.continueButton.text));

    expect(defaultProps.footer.cancelButton.onClick).toHaveBeenCalled();
    expect(defaultProps.footer.continueButton.onClick).toHaveBeenCalled();
  });
});
