import React from 'react'
import { useSpring, animated } from 'react-spring'
import InPic from '../assets/images/In-White-34px-R.png'
import githubPic from '../assets/images/GitHub-Mark-Light-32px.png'
export const Navbar = () => {
    const navSlide = () => {
        const nav = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');
        nav.classList.toggle('nav-active');
        const burger = document.querySelector('.burger');
        burger.classList.toggle('toggle');
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.2}s`;
            }

        })
    }
    const props = useSpring({
        transform: 'translateX(0%)',
        from: { transform: 'translateX(200%)' }
    })
    return (
        <animated.nav style={props}>
            <div className="logo">
                <h4>Sean Flores</h4>
            </div>
            <ul className='nav-links'>
                <li>
                    <a href="https://codewilling.github.io/resume/" target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sean-flores" target="_blank" rel="noopener noreferrer"><img src={InPic}
                        alt="codewilling's linkedin" /></a>
                </li>
                <li>

                    <a href="https://www.github.com/codewilling" target="_blank" rel="noopener noreferrer"><img src={githubPic}
                        alt="codewilling's github" /></a>
                </li>
                {/* <li>

                    <a href="" target="_blank" rel="noopener noreferrer"><Icon id='chatIcon'>chat</Icon></a>
                </li> */}
            </ul>
            <div className="burger" onClick={navSlide}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </animated.nav>
    )
}