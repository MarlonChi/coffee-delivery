import { Meta, StoryObj} from '@storybook/react'
import ProductCard from '.'

export default {
  title: 'components/ProductCard',
  component: ProductCard
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < ProductCard />
      </div>

  )
}
