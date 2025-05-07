"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "../button/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../command/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover/popover"

interface ComboboxProps {
  options: { label: string; value: string }[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyText?: string
  className?: string
  popoverClassName?: string
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select an option",
  emptyText = "No results found.",
  className,
  popoverClassName,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState(value || "")

  React.useEffect(() => {
    if (value !== undefined) {
      setSelected(value)
    }
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          {selected
            ? options.find((option) => option.value === selected)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-full p-0", popoverClassName)}>
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  const newValue = currentValue === selected ? "" : currentValue
                  setSelected(newValue)
                  if (onValueChange) {
                    onValueChange(newValue)
                  }
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 size-4",
                    selected === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
