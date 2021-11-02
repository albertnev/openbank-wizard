import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardFooter from './WizardFooter';

describe('WizardFooter component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardFooter {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders correctly the component');
  it.todo('displays the cancel button if text is provided for it');
  it.todo('cancel button is displayed as a link by default');
  it.todo('displays the continue button if text is provided for it');
});
