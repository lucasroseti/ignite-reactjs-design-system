import { ComponentProps } from 'react'
import { Button } from '../Button'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipRoot,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <Button>Tooltip</Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
