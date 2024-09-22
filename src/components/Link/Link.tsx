import { JSX } from 'solid-js'
import createClasses from '../../helpers/classname.helper'
import './Link.css'

interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  filled?: boolean
  bold?: boolean
}

export default function Link({
  children,
  filled,
  bold,
  classList = {},
  ...props
}: LinkProps) {
  const classes = createClasses('peter-link', props.class)

  return (
    <a {...props} class={classes} classList={{ ...classList, filled, bold }}>
      {children}
    </a>
  )
}
