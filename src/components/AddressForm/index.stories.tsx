import { Meta, StoryObj} from '@storybook/react'
import AddressForm from '.'

export default {
  title: 'components/AddressForm',
  component: AddressForm
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < AddressForm />
      </div>

  )
}
