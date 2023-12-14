import { Meta, StoryObj} from '@storybook/react'
import OrderResume from '.'

export default {
  title: 'components/OrderResume',
  component: OrderResume
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < OrderResume />
      </div>

  )
}
