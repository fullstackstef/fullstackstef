interface Props {
  width: number
  height: number
  color?: string
}

const Instagram = ({ width, height, color = '#FFFFFF' }: Props) => {
  const originalWidth = 40
  const originalHeight = 40
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
          d="M11.818 0C5.302 0 0 5.302 0 11.818v16.364C0 34.698 5.302 40 11.818 40h16.364C34.698 40 40 34.698 40 28.182V11.818C40 5.302 34.698 0 28.182 0H11.818Zm0 1.818h16.364c5.533 0 10 4.467 10 10v16.364c0 5.533-4.467 10-10 10H11.818c-5.533 0-10-4.467-10-10V11.818c0-5.533 4.467-10 10-10ZM30.91 7.273a1.818 1.818 0 1 0 0 3.636 1.818 1.818 0 0 0 0-3.636ZM20 10c-5.512 0-10 4.488-10 10s4.488 10 10 10 10-4.488 10-10-4.488-10-10-10Zm0 1.818A8.168 8.168 0 0 1 28.182 20 8.168 8.168 0 0 1 20 28.182 8.168 8.168 0 0 1 11.818 20 8.168 8.168 0 0 1 20 11.818Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default Instagram
