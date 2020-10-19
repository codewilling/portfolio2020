import React from 'react'
import {useSpring, animated} from 'react-spring';

export const Opener = () => {
    const props = useSpring({ from: {transform:'translateY(-100%)', height:'100%'}, to:{transform: 'translateY(0%)', height:'0%'}, delay:1000,
        config: { duration: 3000 }
    });
    return(
        <animated.div  style={props} className='openerTop'></animated.div>
    )
}