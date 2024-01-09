import React from 'react'
import { useCartContext } from '../context/CartContext'



function Cart() {

    const { sharedState, itensNoCarrinho } = useCartContext()


    const carrinho = JSON.parse(localStorage.getItem("carrinho"))
    console.log(carrinho)

  return (
    <div>
        {(carrinho) ? (
            
            carrinho.map((object) => (
                <li key={object.sring}>
                  Nome: {object.nome} 🗑
                </li>
              ))
        
        ) : (<p>carrinho vazio</p>)}
    </div>
  )
}

export default Cart