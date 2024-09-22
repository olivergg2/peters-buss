import { JSX } from 'solid-js'
import createClasses from '../../helpers/classname.helper'
import styles from './Wrapper.module.css'

export default function Wrapper(props: JSX.HTMLAttributes<HTMLDivElement>) {
  const classes = createClasses(styles.wrapper)

  return (
    <div {...props} class={classes}>
      {props.children}
    </div>
  )
}
