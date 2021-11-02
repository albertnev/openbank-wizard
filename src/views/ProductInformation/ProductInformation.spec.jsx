import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductInformation from './ProductInformation';

describe('ProductInformation component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<ProductInformation {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo(
    'calls the provided onContinue method when continue button is clicked'
  );
});
