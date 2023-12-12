import { render, screen } from '@testing-library/react'

import QuantityInput from '.'

describe('<QuantityInput/>', () => {
  it('should render the heading', () => {
    const {container} = render(<QuantityInput/>)

    expect(screen.getByRole('heading', {name: /QuantityInput/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
