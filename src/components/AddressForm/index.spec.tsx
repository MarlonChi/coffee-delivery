import { render, screen } from '@testing-library/react'

import AddressForm from '.'

describe('<AddressForm/>', () => {
  it('should render the heading', () => {
    const {container} = render(<AddressForm/>)

    expect(screen.getByRole('heading', {name: /AddressForm/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
