import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<Form {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo(
    'calls the provided onContinue method when pressing the continue button'
  );
  it.todo(
    'does not call the provided onContinue method if the form has not been successfully validated'
  );
  it.todo('calls the provided onCancel method when pressing the cancel button');
  it.todo('displays an error message if both passwords do not match');
  it.todo(
    'does not enable the continue button unless both passwords match and have at least uppercase, number, special character and 8 chars long'
  );
  it.todo(
    'displays two password inputs and one text input on its first render'
  );
});
