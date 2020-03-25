import React from 'react';
import { render } from '@testing-library/react';
import Stimuli from '../Stimuli';

test('renders learn react link', () => {
  const { getByText } = render(<Stimuli />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
