import { useEffect } from 'react'
import { useSpring, animated as anim } from 'react-spring'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export default function GooeryClient() {
  const [{ pos1 }, set] = useSpring(() => ({
    pos1: [0, 0],
    config: fast
  }))

  const [{ pos2 }] = useSpring(() => ({
    pos2: [0, 0],
    config: slow
  }))

  const [{ pos3 }] = useSpring(() => ({
    pos3: [0, 0],
    config: slow
  }))

  useEffect(() => {
    const handler = ({ clientX, clientY }) => {
      set({ pos1: [clientX, clientY] })
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div className='ai-gooery'>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main">
        <div className="hooks-filter">
          <anim.div className="b1" style={{ transform: pos3.to(trans) }} />
          <anim.div className="b2" style={{ transform: pos2.to(trans) }} />
          <anim.div className="b3" style={{ transform: pos1.to(trans) }} />
        </div>
      </div>
    </div>
  )
}
