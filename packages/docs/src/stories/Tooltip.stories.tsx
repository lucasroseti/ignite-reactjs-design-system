import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@roseti-ignite-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
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
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
