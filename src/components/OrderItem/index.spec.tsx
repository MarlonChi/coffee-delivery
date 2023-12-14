import { render, screen } from '@testing-library/react'

import OrderItem from '.'

describe('<OrderItem/>', () => {
  it('should render the heading', () => {
    const {container} = render(<OrderItem/>)

    expect(screen.getByRole('heading', {name: /OrderItem/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
