import React from 'react'

function ItemDetail( {desc, imgUrl, preco} ) {

  return (
    <div>
        <p>{desc}</p>
        <img src={imgUrl}></img>
        <span>{preco}</span>
    </div>
  )
}

export default ItemDetail