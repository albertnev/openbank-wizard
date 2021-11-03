import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  const renderComponent = () => render(<App />);

  it('renders the component correctly', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-app')).toBeInTheDocument();
  });

  it('renders the Wizard component correctly', () => {
    renderComponent();
    expect(screen.getByTestId('wizard-container')).toBeInTheDocument();
  });
});
