interface Props {
  width: number
  height: number
  color?: string
}

const ArrowRight = ({ width, height, color = '#FFFFFF' }: Props) => {
  const originalWidth = 75
  const originalHeight = 83
  return (
    <div>
      <svg
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      >
        <path
          d="M14.394 4.924a3.788 3.788 0 0 1 3.788-3.788h53.03a3.788 3.788 0 1 1 0 7.576h-53.03a3.788 3.788 0 0 1-3.788-3.788Z"
          fill={color}
        />
        <rect
          x={14.394}
          y={1.136}
          width={60.606}
          height={8.523}
          rx={4.261}
          fill={color}
        />
        <rect
          x={4.167}
          y={32.007}
          width={34.091}
          height={9.47}
          rx={4.735}
          transform="rotate(-69.865 4.167 32.007)"
          fill={color}
        />
        <rect
          x={5.718}
          y={24.621}
          width={56.818}
          height={9.47}
          rx={4.735}
          transform="rotate(.218 5.718 24.621)"
          fill={color}
        />
        <rect
          y={75.248}
          width={75.758}
          height={9.47}
          rx={4.735}
          transform="rotate(-41.934 0 75.248)"
          fill={color}
        />
        <rect
          y={77.608}
          width={85.227}
          height={9.47}
          rx={4.735}
          transform="rotate(-64.98 0 77.608)"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default ArrowRight
