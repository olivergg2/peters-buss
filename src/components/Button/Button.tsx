import { JSX } from 'solid-js'
import createClasses from '../../helpers/classname.hook'
import styles from './Button.module.css'

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  bold?: boolean
}

export default function Button({ children, bold, ...props }: ButtonProps) {
  const classes = createClasses(styles.button, props.class)

  return (
    <button {...props} class={classes} classList={{ [styles.bold]: bold }}>
      {children}
    </button>
  )
}

interface OutlinedButtonProps extends ButtonProps {}

export function OutlinedButton({ children, ...props }: OutlinedButtonProps) {
  const classes = createClasses(styles.outlined, props.class)

  return (
    <Button {...props} class={classes}>
      {children}
    </Button>
  )
}
