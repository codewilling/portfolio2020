import React from 'react'
import InPic from '../assets/images/In-White-34px-R.png'
import githubPic from '../assets/images/GitHub-Mark-Light-32px.png'

export const Footer = () => (
    <footer>
        <div class="contactMe">
            <a href="https://www.linkedin.com/in/sean-flores" target="_blank" rel="noopener noreferrer"><img src={InPic}
                alt="codewilling's linkedin" /></a>
            <a href="https://www.github.com/codewilling" target="_blank" rel="noopener noreferrer"><img src={githubPic}
                alt="codewilling's github" /></a>
        </div>
        <p>&#169 2018 Sean Flores</p>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
)