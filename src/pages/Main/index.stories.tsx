import { Meta, StoryObj} from '@storybook/react'
import Main from '.'

export default {
  title: 'components/Main',
  component: Main
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < Main />
      </div>

  )
}
