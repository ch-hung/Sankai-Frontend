import React from 'react'
import Card from './Card'

export default function Contents({ content }) {
  return (
    <div className='contents mycard-container'>
      {content && content.map(product => <Card key={product.id} product={product} />)}
    </div>
  )
}
