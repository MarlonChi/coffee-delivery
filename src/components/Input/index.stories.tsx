import { Meta, StoryObj} from '@storybook/react'
import Input from '.'

export default {
  title: 'components/Input',
  component: Input
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < Input />
      </div>

  )
}
