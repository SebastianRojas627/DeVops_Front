// SimpleComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SimpleComponent from './SimpleComponent';

test('renders hello world', () => {
  const { getByText } = render(<SimpleComponent />);
  const element = getByText(/hello, world/i);
  expect(element).toBeInTheDocument();
});
