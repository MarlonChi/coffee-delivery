import { Meta, StoryObj} from '@storybook/react'
import OrderItem from '.'

export default {
  title: 'components/OrderItem',
  component: OrderItem
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < OrderItem />
      </div>

  )
}
