import React from 'react'

export const Input = () => {
    return (
        <div className='data-input'>
        <h2>Animation Input</h2>
            <label className='label-name'>
            <span className='content-name'>Name</span>
                <input type='text' name='name' required autoComplete='off'/>
            </label>
        </div>
    )
}