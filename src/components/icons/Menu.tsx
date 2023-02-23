interface Props {
  width: number
  height: number
  color?: string
  className?: string
}

const Menu = ({ width, height, color = '#FFFFFF', className }: Props) => {
  const originalWidth = 25
  const originalHeight = 27
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
        <path
          d="M0 0h25v3.125H0zM0 11.563h25v3.125H0zM0 23.125h25v3.125H0z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default Menu
