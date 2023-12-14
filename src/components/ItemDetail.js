import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail( {desc, imgUrl, preco} ) {

  return (
    <div>
        
        <img src={imgUrl}></img>
        
        
        <p>{desc}</p>
        <span>R$ {preco}</span>

        <ItemCount stock={5} initial={1} />

    </div>
  )
}

export default ItemDetail