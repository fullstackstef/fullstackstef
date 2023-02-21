interface Props {
  width: number
  height: number
  color?: string
}

const ArrowRight = ({ width, height, color = '#FFFFFF' }: Props) => {
  const originalWidth = 16
  const originalHeight = 18
  return (
    <div>
      <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      >
        <path d="M15.066 9 .123 17.759.009.439l15.056 8.56Z" fill={color} />
      </svg>
    </div>
  )
}

export default ArrowRight
