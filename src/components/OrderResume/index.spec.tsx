import { render, screen } from '@testing-library/react'

import OrderResume from '.'

describe('<OrderResume/>', () => {
  it('should render the heading', () => {
    const {container} = render(<OrderResume/>)

    expect(screen.getByRole('heading', {name: /OrderResume/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
