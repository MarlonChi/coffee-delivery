import { Meta, StoryObj} from '@storybook/react'
import CheckoutPayments from '.'

export default {
  title: 'components/CheckoutPayments',
  component: CheckoutPayments
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < CheckoutPayments />
      </div>

  )
}
