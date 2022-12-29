import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';

window.fetch = jest.fn(() => {
  const user = "Rewards Plus";

  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

describe('Testing App Component', () => {
  test('loading text is shown while API request is in progress', async () => {
    render(<App />);
    const loading = screen.getByText('Rewards Plus');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Rewards Plus'));
  });

  test("user's name is rendered", async () => {
    render(<App />);
    const userName = await screen.findByText('Rewards Plus');
    expect(userName).toBeInTheDocument();
  });

  test('error message is shown', async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: 'API is down' });
    });

    render(<App />);

    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });
});