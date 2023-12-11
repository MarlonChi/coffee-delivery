import { Meta, StoryObj} from '@storybook/react'
import BannerMain from '.'

export default {
  title: 'components/BannerMain',
  component: BannerMain
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < BannerMain />
      </div>

  )
}
