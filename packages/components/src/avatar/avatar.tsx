"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "../lib/utils"

export interface AvatarProps extends
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {}

const Avatar = ({ className, ...props }: AvatarProps) => (
  <AvatarPrimitive.Root
    className={cn(
      "relative flex size-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
)
Avatar.displayName = AvatarPrimitive.Root.displayName

export interface AvatarImageProps extends
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

const AvatarImage = ({ className, ...props }: AvatarImageProps) => (
  <AvatarPrimitive.Image
    className={cn("aspect-square size-full", className)}
    {...props}
  />
)
AvatarImage.displayName = AvatarPrimitive.Image.displayName

export interface AvatarFallbackProps extends
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => (
  <AvatarPrimitive.Fallback
    className={cn(
      "flex size-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
)
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
