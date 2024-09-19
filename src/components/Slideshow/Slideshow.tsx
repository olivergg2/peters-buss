import { createSignal, JSX, onCleanup } from 'solid-js'
import './Slideshow.css'
import useInterval from '../../helpers/interval.hook'
import Button from '../Button/Button'
import createClasses from '../../helpers/classname.hook'

interface SlideshowProps extends JSX.HTMLAttributes<HTMLElement> {
  links: string[]
  delay?: number
}

export default function Slideshow({
  links,
  delay = 5000,
  ...props
}: SlideshowProps) {
  const [index, setIndex] = createSignal(0)

  const classes = createClasses('slideshow', props.class)

  const next = () => setIndex(i => (i + 1) % links.length)
  const prev = () => setIndex(i => (i === 0 ? links.length - 1 : i - 1))

  const { start, reset, clear } = useInterval(next, delay)

  start()

  onCleanup(clear)

  function handlePrev() {
    prev()
    reset()
  }

  function handleNext() {
    next()
    reset()
  }

  const indexOf = () => `${index() + 1} av ${links.length}`

  return (
    <section {...props} class={classes}>
      <img class="slideshow-image" src={links[index()]}>
        {index()}
      </img>
      <h4 class="slideshow-index">{indexOf()}</h4>
      <Button bold class="slideshow-next left" onClick={handlePrev}>
        &xlarr;
      </Button>
      <Button bold class="slideshow-next right" onClick={handleNext}>
        &xrarr;
      </Button>
    </section>
  )
}
