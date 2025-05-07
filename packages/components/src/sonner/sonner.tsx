"use client"

import * as React from "react"
import { Toaster as Sonner } from "sonner"

import { cn } from "../lib/utils"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ className, ...props }: ToasterProps) => {
  return (
    <Sonner
      className={cn(className)}
      toastOptions={{
        classNames: {
          toast:
            "group toast group flex w-full items-center border border-border bg-background p-4 pr-8 shadow-lg relative pointer-events-auto rounded-md",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error:
            "group-[.toast]:text-destructive group-[.toast]:border-destructive/50 group-[.toast]:dark:border-destructive [&>div>svg]:text-destructive",
          success:
            "group-[.toast]:text-success group-[.toast]:border-success/50 group-[.toast]:dark:border-success [&>div>svg]:text-success",
          warning:
            "group-[.toast]:text-warning group-[.toast]:border-warning/50 group-[.toast]:dark:border-warning [&>div>svg]:text-warning",
          info: "group-[.toast]:text-info group-[.toast]:border-info/50 group-[.toast]:dark:border-info [&>div>svg]:text-info",
          loading:
            "group-[.toast]:text-muted-foreground group-[.toast]:border-muted-foreground/50 group-[.toast]:dark:border-muted-foreground [&>div>svg]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
