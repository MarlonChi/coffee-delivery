import { render, screen } from '@testing-library/react'

import CheckoutPayments from '.'

describe('<CheckoutPayments/>', () => {
  it('should render the heading', () => {
    const {container} = render(<CheckoutPayments/>)

    expect(screen.getByRole('heading', {name: /CheckoutPayments/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
