import { Meta, StoryObj} from '@storybook/react'
import QuantityInput from '.'

export default {
  title: 'components/QuantityInput',
  component: QuantityInput
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < QuantityInput />
      </div>

  )
}
