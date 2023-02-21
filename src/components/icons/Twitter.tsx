interface Props {
  width: number
  height: number
  color?: string
}

const Twitter = ({ width, height, color = '#FFFFFF' }: Props) => {
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
          d="M27.3677 0C22.5857 0 18.697 3.88867 18.697 8.67063C18.697 8.95799 18.7689 9.2391 18.797 9.5202C12.8843 8.95486 7.65572 6.1063 4.10438 1.74912C3.93884 1.53985 3.68272 1.42741 3.4141 1.44615C3.14861 1.46489 2.91123 1.61794 2.78005 1.84907C2.03355 3.1328 1.60564 4.61018 1.60564 6.19688C1.60564 8.11779 2.29279 9.87628 3.35476 11.3193C3.14861 11.2287 2.92372 11.1787 2.73007 11.0694C2.48332 10.9382 2.1866 10.9445 1.94609 11.0882C1.70559 11.2318 1.55879 11.4911 1.55566 11.7691V11.869C1.55566 14.8144 3.0799 17.3725 5.32876 18.9405C5.30378 18.9373 5.27879 18.9467 5.2538 18.9405C4.97894 18.8936 4.70095 18.9904 4.51667 19.1997C4.33239 19.409 4.27305 19.6995 4.35425 19.9649C5.24755 22.7417 7.52765 24.8625 10.3512 25.6371C8.10237 26.9739 5.4943 27.761 2.6801 27.761C2.07103 27.761 1.48695 27.7298 0.905991 27.6611C0.53118 27.6111 0.171985 27.8297 0.0470485 28.1858C-0.081012 28.5419 0.0595422 28.9385 0.381255 29.1353C3.98881 31.4498 8.27103 32.8085 12.875 32.8085C20.3368 32.8085 26.1901 29.6913 30.1163 25.2373C34.0424 20.7833 36.0883 14.9987 36.0883 9.59517C36.0883 9.36716 36.0695 9.14539 36.0633 8.92051C37.5282 7.7992 38.8369 6.48423 39.8614 4.94751C40.0644 4.65078 40.0425 4.25411 39.8083 3.97925C39.5771 3.70438 39.1867 3.62005 38.8619 3.7731C38.4496 3.95738 37.9686 3.97612 37.5375 4.12292C38.106 3.36393 38.5933 2.54559 38.8869 1.62418C38.9868 1.30872 38.8775 0.962015 38.6182 0.75587C38.359 0.552846 37.9967 0.527859 37.7125 0.699648C36.3475 1.50862 34.8358 2.07708 33.2397 2.42378C31.6905 0.974509 29.6509 0 27.3677 0ZM27.3677 1.59919C29.4073 1.59919 31.2501 2.47063 32.5401 3.84806C32.7337 4.04796 33.0179 4.13229 33.2897 4.07295C34.3329 3.8668 35.323 3.56383 36.2882 3.1734C35.7322 3.92302 35.045 4.56333 34.2392 5.04746C33.8738 5.22549 33.702 5.64716 33.8363 6.03134C33.9675 6.41239 34.3673 6.63416 34.7639 6.5467C35.5635 6.44988 36.2757 6.12504 37.0378 5.92202C36.3538 6.66227 35.6041 7.33068 34.7889 7.92101C34.5672 8.08343 34.4453 8.3458 34.4641 8.62066C34.4766 8.94549 34.4891 9.26721 34.4891 9.59517C34.4891 14.5926 32.5713 20.018 28.9169 24.1628C25.2625 28.3076 19.8964 31.2093 12.875 31.2093C9.68594 31.2093 6.67496 30.5034 3.95446 29.2603C7.32776 29.001 10.4387 27.8079 12.9499 25.837C13.2123 25.6277 13.3154 25.2779 13.2092 24.9593C13.103 24.6407 12.8094 24.4221 12.4752 24.4127C9.83899 24.3659 7.63073 22.8322 6.4532 20.6646C6.49692 20.6646 6.53441 20.6646 6.57813 20.6646C7.36836 20.6646 8.14922 20.5646 8.87698 20.3647C9.2268 20.2617 9.4673 19.9368 9.45481 19.5714C9.44232 19.2059 9.18307 18.8936 8.827 18.8155C5.98156 18.2408 3.84826 15.9232 3.35476 13.0434C4.1606 13.3214 4.98519 13.5401 5.87849 13.5682C6.24393 13.59 6.57501 13.362 6.68745 13.0153C6.7999 12.6686 6.66247 12.2876 6.35325 12.0939C4.4542 10.8227 3.20483 8.65814 3.20483 6.19688C3.20483 5.28484 3.44221 4.44776 3.75456 3.64816C7.75254 8.03658 13.3497 10.9507 19.6715 11.2693C19.9214 11.2818 20.165 11.1787 20.3275 10.9882C20.4899 10.7946 20.5523 10.5384 20.4961 10.2948C20.3743 9.77633 20.2962 9.2266 20.2962 8.67063C20.2962 4.75386 23.4509 1.59919 27.3677 1.59919Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export default Twitter
