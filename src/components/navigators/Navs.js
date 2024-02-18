import React from 'react'
import Nav from './Nav'

export default function Navs(props) {
  let {setCategory} = props;
  return (
    <div className='navs'>
      <Nav categoryName="推薦" categoryIndex={0} setCategory={setCategory} />
      <Nav categoryName="定食" categoryIndex={1} setCategory={setCategory}/>
      <Nav categoryName="天丼" categoryIndex={2} setCategory={setCategory}/>
      <Nav categoryName="單點天麩羅" categoryIndex={3} setCategory={setCategory}/>
    </div>
  )
}
