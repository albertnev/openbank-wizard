import React from 'react';
import { render, screen } from '@testing-library/react';
import Feedback from './Feedback';

describe('Feedback component', () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderComponent = (props) => render(<Feedback {...props} />);

  beforeEach(() => {
    renderComponent();
  });

  it.todo('renders the component correctly');
  it.todo('does not display the corporative title component');
  it.todo('executes the provided onContinue method');
  it.todo('displays the correct content when success prop is false');
  it.todo('displays the correct content when success prop is true');
});
