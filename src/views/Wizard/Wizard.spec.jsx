import React from 'react';
import { render, screen } from '@testing-library/react';
import Wizard from './Wizard';

describe('Wizard component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<Wizard {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo('shows the ProductInformation page on the first step');
  it.todo('shows the Form page on the second step');
  it.todo('shows the Feedback page on the third and last step');
  it.todo('sends the form data and increases the step when Form is submitted');
  it.todo(
    'shows the loader when the form data is submitted and it is waiting for a response'
  );
  it.todo('shows the error Feedback page when the response is not successful');
  it.todo('shows the success Feedback page when the response is successful');
  it.todo(
    'returns to the first step when the continue button is pressed on the last step'
  );
});
