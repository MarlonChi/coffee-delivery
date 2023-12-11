import { Meta, StoryObj} from '@storybook/react'
import ProductTag from '.'

export default {
  title: 'components/ProductTag',
  component: ProductTag
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < ProductTag />
      </div>

  )
}
