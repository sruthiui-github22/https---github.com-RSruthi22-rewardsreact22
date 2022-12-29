import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import FetchPage from './FetchPage'

test('Loads rewards page and verfies count', async () => {
  // Rewards page
  render(<FetchPage url="http://localhost:3000/rewards" />)

  // ACT
 // await userEvent.click(screen.getByText('Rewards'))
  await screen.findByText('Rewards')

  // ASSERT
  expect(screen.getByText('Rewards')).toHaveTextContent('Rewards')
  // expect(screen.getByRole('button')).toBeDisabled()
})
