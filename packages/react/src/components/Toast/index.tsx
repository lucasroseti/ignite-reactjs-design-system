import { ComponentProps, useState } from 'react'
import { X } from 'phosphor-react'
import { Button } from '../Button'
import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast() {
  const [open, setOpen] = useState(false)

  function handleOpen(status = false) {
    setOpen(status)
  }

  return (
    <ToastContainer swipeDirection="right">
      <Button onClick={() => handleOpen(!open)}>Toast</Button>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastContent>
          <ToastTitle>Toast Title</ToastTitle>
          <ToastClose onClick={() => handleOpen(!open)}>
            <X />
          </ToastClose>
        </ToastContent>
        <ToastDescription>Toast Description</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
