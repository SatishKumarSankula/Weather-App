import React from 'react'

function ProductCard({image,title,price,rating}) {
  return (
    <div className='card'>
      <img src={image} alt="Card-images"/>
      <p>{title}</p>
      <p>${price}</p>
      <p>{rating.rate}</p>
    </div>
  )
}

export default ProductCard