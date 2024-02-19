import React from 'react'

export default function Card({ product }) {
  const { name, detail, price, url } = product;
  const imgurl = `http://localhost:8080/images/${url}`;
  return (
    <div className='mycard'>
      {url && <img className='card-img' alt="product-img" src={imgurl}></img>}
      <div className='card-name'>
        {name}
      </div>
      <div className='card-price'>
        {price + "元"}
      </div>
      <div className='card-detail'>
        {detail !== "" ? detail : null}
      </div>
    </div>
  )
}
