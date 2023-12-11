import { render, screen } from '@testing-library/react'

import BannerMain from '.'

describe('<BannerMain/>', () => {
  it('should render the heading', () => {
    const {container} = render(<BannerMain/>)

    expect(screen.getByRole('heading', {name: /BannerMain/i})).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
