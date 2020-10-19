import React, { Component, useEffect, useRef } from 'react';
// import gsap from 'gsap';
import { useSpring, animated } from 'react-spring'

import {Card} from './SpringCard.js';
// import {Card} from './SpringCard';

export const Main = () => {
    // const heroSection = useRef(null);

    // useEffect(() => {
    //         gsap.timeline().fromTo(heroSection.current, { height: '0%' }, { duration: 1, height: '100%' })
    //     }, []);
    // const ref = useRef(null);

    

    return (
        <>
            <section>
                <div className="hero" >
                    <video className="video-container" muted autoPlay loop>
                        <source
                            src="https://res.cloudinary.com/juntola/video/upload/v1597892653/website/videoplayback.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>
        </>
    )

}