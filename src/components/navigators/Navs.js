import React from 'react'
import Nav from './Nav'
import Navhome from './Navhome'
import { Link } from 'react-router-dom'

export default function Navs({ setCategory }) {
  return (
    <div className='navs'>
      <Link to='/'><Navhome categoryName="首頁" /></Link>
      <Link to='/menu'>
        <Nav categoryName="定食" categoryIndex={1} setCategory={setCategory} />
        <Nav categoryName="天丼" categoryIndex={2} setCategory={setCategory} />
        <Nav categoryName="單點天麩羅" categoryIndex={3} setCategory={setCategory} />
      </Link>
    </div>
  )
}
