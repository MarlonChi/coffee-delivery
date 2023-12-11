import { render, screen } from '@testing-library/react'

import ProductTag from '.'

describe('<ProductTag/>', () => {
  it('should render the heading', () => {
    const {container} = render(<ProductTag/>)

    expect(screen.getByRole('heading', {name: /ProductTag/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
