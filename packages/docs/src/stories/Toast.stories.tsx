import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@roseti-ignite-ui/react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
