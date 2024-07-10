import { animated, useSpring } from '@react-spring/web'
import { css } from '@styled-stytem/css'

const Loading = () => {
  //   const samllRef = useSpringRef()
  //   const bigRef = useSpringRef()
  const springs = useSpring({
    // ref: samllRef,
    from: { cx: '76.8016', cy: '76.8016', r: '19.2' },
    to: { cx: '77.5977', cy: '76.8008', r: '32' },
    loop: {
      delay: 100,
      to: { cx: '77.3992', cy: '76.8016', r: '19.2' },
      loop: true
    },
    delay: 100,
    config: { duration: 250 }
  })

  const springs2 = useSpring({
    from: { strokeWidth: 0 },
    to: { strokeWidth: 19.2 },
    loop: {
      delay: 100,
      to: { strokeWidth: 0 }
    },
    delay: 250,
    config: { duration: 150, delay: 4051 }
  })
  //   useChain([samllRef, bigRef], [0, 0.5])
  return (
    <div
      className={css({
        display: 'flex',
        w: 153,
        h: 153,
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'ease-out',
        transition: 'all 0.25s ease-out',
        transform: 'transition all 0.25s ease-out'
      })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="154" height="154" viewBox="0 0 154 154" fill="none">
        <animated.circle fill="#FF9900" fill-opacity="0.5" {...springs} />
        <animated.circle
          cx="77.3984"
          cy="76.8008"
          r="54.4"
          stroke="#FFC513"
          stroke-opacity="0.5"
          //   stroke-width="19.2"
          {...springs2}
        />
      </svg>
    </div>
  )
}

export default Loading
