import React from 'react'
import Btn from './Btn'
import { Link } from 'react-router-dom'

export default function Btns() {
    return (
        <div className='btns'>
            <Link to='/order'><Btn text="訂單" /></Link>
            <Btn text="呼叫" />
            <Btn text="結帳" />
        </div>
    )
}
