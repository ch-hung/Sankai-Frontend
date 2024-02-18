import React from 'react'

export default function Nav(props) {
    const clickHandler = () => {
        props.setCategory(props.categoryIndex);
    }
    return (
        <div className='btn mynav' onClick={clickHandler}>
            <p>{props.categoryName}</p>
        </div>
    )
}
