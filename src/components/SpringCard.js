import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring'

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.4,
]
const trans = (x, y, s) =>
    `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const SpringCard = ({ link, text }) => {
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    //   const [config, knobs] = useKnobs({ mass: 1, tension: 170, friction: 26 })
    const props = useSpring({ xys, config: { mass: 100, tension: 50, friction: 350 } })

    return (
        <a className='card-link' href={link} target="_blank" rel="noopener noreferrer" >
            <div className="scard-container"   >
                    <h6 className='scard-text' ref={ref}>
                <animated.div
                    className="scard-main"
                    style={{ transform: props.xys.interpolate(trans) }}
                    onMouseLeave={() => {
                        set([0, 0, 1])
                    }}
                    onMouseMove={e => {
                        const rect = ref.current.getBoundingClientRect()
                        set(calc(e.clientX, e.clientY, rect))
                    }}
                >
                        {text}
                </animated.div>
                    </h6>

            </div>
        </a>
    )
}