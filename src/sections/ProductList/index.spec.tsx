import { render, screen } from '@testing-library/react'

import ProductList from '.'

describe('<ProductList/>', () => {
  it('should render the heading', () => {
    const {container} = render(<ProductList/>)

    expect(screen.getByRole('heading', {name: /ProductList/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
