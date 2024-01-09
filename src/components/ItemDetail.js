import React from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext'

function ItemDetail({ id, sabor, desc, categoria, imgUrl, string, preco, estoque }) {
  const { sharedState, itensNoCarrinho } = useCartContext()
  
  
  console.log("contexto é = ", sharedState)


  function onAdd(qtdToAdd) {
    let newItemCattinho = {nome: sabor, preco: preco, qts: qtdToAdd, string: string}
    itensNoCarrinho.push(newItemCattinho)
    localStorage.setItem("carrinho", JSON.stringify(itensNoCarrinho))

    console.log("push ")
  }

  function onRemove() {
    itensNoCarrinho.pop()
    localStorage.setItem("carrinho", JSON.stringify(itensNoCarrinho))
    console.log("pop ", itensNoCarrinho)
  }


  return (
    <div className='p-4 pt-16 flex m-auto'>

      <img src={imgUrl} alt={string} className='w-[400px]'></img>

      <div className='pl-16'>
        <h1>{sabor}</h1>
        <p>{desc}</p>
        <h4>{categoria}</h4>

        <span>R$ {preco}</span>

        <ItemCount estoque={estoque} initial={1} onAdd={onAdd} onRemove={onRemove} string={string}/>
      </div>

    </div>
  )
}

export default ItemDetail