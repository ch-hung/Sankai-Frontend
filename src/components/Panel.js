import React from 'react'
import Logo from './Logo'
import Navs from './navigators/Navs'
import Contents from './contents/Contents'
import Btns from './btns/Btns'
import Note from './Note'

export default function Panel() {
    return (
        <div className='panel'>
            <Logo />
            <Note />
            <Btns />
            <Navs />
            <Contents />
        </div>
    )
}
