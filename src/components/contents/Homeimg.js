import React from 'react'

export default function Homeimg({ imgname }) {
    const url = `${process.env.PUBLIC_URL}/images/${imgname}`;
    return (
        <div>
            <img alt={imgname} src={url}></img>
        </div>
    )
}
