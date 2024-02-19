import React from 'react'

export default function Nav({ categoryIndex, categoryName, setCategory }) {
    const clickHandler = () => {
        setCategory(categoryIndex);
    }
    return (
        <div className='btn mynav' onClick={clickHandler}>
            <p>{categoryName}</p>
        </div>
    )
}
