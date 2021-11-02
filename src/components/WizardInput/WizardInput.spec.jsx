import React from 'react';
import { render, screen } from '@testing-library/react';
import WizardInput from './WizardInput';

describe('WizardInput component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<WizardInput {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders correctly the component');
  it.todo(
    'renders correctly the default input value first time it is instantiated'
  );
  it.todo('displays the label correctly when it is provided as text');
  it.todo('displays the label correctly when it is provided as a method');
  it.todo('focuses the input when label is clicked');
  it.todo('changes the displayed value in the input when typing');
  it.todo('calls the provided onChange method when its value changes');
  it.todo('toggles the text mask when clicking on the mask icon');
  it.todo(
    'does not display the mask icon when toggleVisibility is not provided'
  );
  it.todo(
    'does not let to write more content once the maxLength has been reached'
  );
  it.todo('displays the remaining characters when provided to do so');
  it.todo('displays an error message when it is provided');
  it.todo(
    'provides visual feedback to the user when the input has succeeded the validation'
  );
  it.todo(
    'provides visual feedback to the user when the input has not succeeded the validation'
  );
  it.todo(
    'does not provide visual feedback to the user when the isValid prop is not provided'
  );
  it.todo(
    'calls the setIsValid callback when provided along with securityKeys prop'
  );
  it.todo(
    'displays the security hints when showSecurityHints prop is not provided'
  );
  it.todo(
    'does not display the security hints when showSecurityHints prop is provided as false'
  );
  it.todo(
    'displays visual feedback about the strength of the password based on securityKeys provided'
  );
  it.todo(
    'updates visual feedback when defaultValue is provided and user has not typed anything yet'
  );
});
