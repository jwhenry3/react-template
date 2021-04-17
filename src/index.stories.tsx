import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Example, Props } from './index'

export default {
  title: 'Example',
  component: Example,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story<Props> = (args) => <Example {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Test'
}
