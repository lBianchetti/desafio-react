import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({ id, sabor, desc, categoria, imgUrl, string, preco, estoque }) {

  function onAdd(qtdToAdd) {

  }

  function onRemove() {

  }
  return (
    <div className='p-4 pt-16 flex m-auto'>

      <img src={imgUrl} alt={string} className='w-[400px]'></img>

      <div className='pl-16'>
        <h1>{sabor}</h1>
        <p>{desc}</p>
        <h4>{categoria}</h4>

        <span>R$ {preco}</span>

        <ItemCount estoque={estoque} initial={1} onAdd={onAdd} onRemove={onRemove}/>
      </div>

    </div>
  )
}

export default ItemDetail