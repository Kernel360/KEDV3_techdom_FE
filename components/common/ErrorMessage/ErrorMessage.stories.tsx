import ErrorMessage from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ErrorMessage> = {
    title: 'Components/ErrorMessage',
    component: ErrorMessage,
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta
type StoryType = StoryObj<typeof ErrorMessage>

export const Default: StoryType = {}
