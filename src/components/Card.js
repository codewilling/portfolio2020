import React from 'react'
import { SpringCard } from './SpringCard'


export const Card = ({ project }) => {
    const { name, link, image } = project;
    const styles = {
        backgroundImage: 'url(' + image + ')',
        backgroundSize: "cover",
    }
    return (
        <div className="card-container">
            <div className="card-background" style={styles.background}>
            </div>
            <SpringCard link={link} text={name} />
        </div>
    )
}