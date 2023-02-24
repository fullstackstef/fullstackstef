interface Props {
  width: number
  height: number
  color?: string
  className?: string
}

const Close = ({ width, height, color = '#FFFFFF', className }: Props) => {
  const originalWidth = 25
  const originalHeight = 22
  return (
    <div>
      <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        className={className}
      >
        <path fill={color} d="M0 19.527 23.505 0 25 1.8 1.495 21.327z" />
        <path fill={color} d="M25 19.527 1.495 0 0 1.8l23.505 19.527z" />
      </svg>
    </div>
  )
}

export default Close
