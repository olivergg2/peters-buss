type StringLike = string | undefined

export default function createClasses(...classnames: StringLike[]) {
  const classes = [...classnames]

  return classes.join(' ')
}
