import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail( { id, sabor, categoria, imgUrl, string, preco, estoque } ) {

  return (
    <div>
        
        <img src={imgUrl}></img>
        
        
        
        <span>R$ {preco}</span>

        <ItemCount stock={5} initial={1} />

    </div>
  )
}

export default ItemDetail