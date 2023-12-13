import { Meta, StoryObj} from '@storybook/react'
import ProductList from '.'

export default {
  title: 'components/ProductList',
  component: ProductList
} as Meta

export const Default: StoryObj = {
  render: () => (
      <div>
        < ProductList />
      </div>

  )
}
