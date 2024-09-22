import { JSX } from 'solid-js'
import styles from './Card.module.css'
import createClasses from '../../helpers/classname.helper'

interface CardProps extends JSX.HTMLAttributes<HTMLElement> {
  outlined?: boolean
  transparent?: boolean
}

export default function Card({ outlined, transparent, ...props }: CardProps) {
  const classes = createClasses(styles.card, props.class)

  return (
    <section
      {...props}
      class={classes}
      classList={{
        [styles.outlined]: outlined,
        [styles.transparent]: transparent,
      }}>
      {props.children}
    </section>
  )
}
