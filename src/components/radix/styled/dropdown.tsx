import tw from "tailwind-styled-components"

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { itemStyles } from "./constants"

const contentStyles = `
  min-w-fit
  rounded-md
  shadow-md
  bg-navy-blue-400
  p-2
  motion-safe:will-change-transform-opacity
  motion-safe:radix-state-open:radix-side-top:animate-slide-down-fade
  motion-safe:radix-state-open:radix-side-bottom:animate-slide-up-fade
  motion-safe:radix-state-open:radix-side-right:animate-slide-left-fade
  motion-safe:radix-state-open:radix-side-left:animate-slide-right-fade
`

/** When the Select state is open, this is the parent element of all items selection panel. */
const StyledContent = tw(DropdownMenuPrimitive.Content)`
${() => contentStyles}
`

/** When the Select state is open, this is the parent element of all items in subselection panels. */
const StyledSubContent = tw(DropdownMenuPrimitive.SubContent)`
${() => contentStyles}
`

/** Paints the arrow that indicates to which Dropdown Trigger the StyledContent belongs to. */
const StyledArrow = tw(DropdownMenuPrimitive.Arrow)`
fill-navy-blue-400
`

/** Guarantees that the item that triggers the opening of nested Dropdown remains colored */
const StyledSubTrigger = tw(DropdownMenuPrimitive.SubTrigger)`
  radix-state-open:bg-navy-blue-600
  radix-state-open:text-white
  ${() => itemStyles}
`

/** Renders an item within the selection panel when Dropdown state is open. */
const StyledItem = tw(DropdownMenuPrimitive.Item)`
  ${() => itemStyles}
`

/**
 * Renders a checkable item within the selection panel when Dropdown state is open.
 *
 * Multiple items of this kind can be selected at the same time.
 */
const StyledCheckboxItem = tw(DropdownMenuPrimitive.CheckboxItem)`
  ${() => itemStyles}
`

/**
 * Renders a checkable item of the radio kind within the selection panel when Dropdown state is open.
 *
 * By default only one radio button in a group of radio buttons can be selected.
 */
const StyledRadioItem = tw(DropdownMenuPrimitive.RadioItem)`
  ${() => itemStyles}
`

const StyledLabel = tw(DropdownMenuPrimitive.Label)`
  py-0 pr-2 pl-6 text-xs leading-6 text-yellow-400 capitalize
`

const StyledSeparator = tw(DropdownMenuPrimitive.Separator)`
  h-px bg-yellow-400 m-2
`

/** Example usage
 *
 ```
<DropdownItem icon={<Gi3DGlasses />} shortcut="⌘+T">
  New Tab
</DropdownItem>
 ```
 */
const StyledItemIndicator = tw(DropdownMenuPrimitive.ItemIndicator)`
  absolute
  left-0
  w-6
  inline-flex
  items-center
  justify-center
  text-white
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Content({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SubContent({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props}>{children}</StyledSubContent>
    </DropdownMenuPrimitive.Portal>
  )
}

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuContent = Content

export const DropdownMenuItem = StyledItem

/** Example usage:
 *
```
<DropdownMenuCheckboxItem
  checked={bookmarksChecked}
  onCheckedChange={setBookmarksChecked}
>
  <DropdownMenuItemIndicator>
    <BiCheck />
  </DropdownMenuItemIndicator>
  Show Bookmarks <RightSlot>⌘+B</RightSlot>
</DropdownMenuCheckboxItem>
 ```
 */
export const DropdownMenuCheckboxItem = StyledCheckboxItem

/**
 * Example usage:
 *
```
<DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
  <DropdownMenuRadioItem value="pedro">
    <DropdownMenuItemIndicator>
      <GoPrimitiveDot />
    </DropdownMenuItemIndicator>
    Pedro Duarte
  </DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="colm">
    <DropdownMenuItemIndicator>
      <GoPrimitiveDot />
    </DropdownMenuItemIndicator>
    Colm Tuite
  </DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
 ```
 */
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

/**
 * Example usage:
 *
 ```
<DropdownMenuRadioItem value="pedro">
  <DropdownMenuItemIndicator>
    <GoPrimitiveDot />
  </DropdownMenuItemIndicator>
  Pedro Duarte
</DropdownMenuRadioItem>
```
 */
export const DropdownMenuRadioItem = StyledRadioItem
export const DropdownMenuItemIndicator = StyledItemIndicator
export const DropdownMenuLabel = StyledLabel
export const DropdownMenuSeparator = StyledSeparator
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuSubTrigger = StyledSubTrigger
export const DropdownMenuSubContent = SubContent