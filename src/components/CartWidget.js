import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as IconShopping } from '../assets/icons/cart-shopping-solid.svg';
import { useCartContext } from '../context/CartContext';


function CartWidget() {
  const { sharedState, itensNoCarrinho } = useCartContext()

  const [count, setCount] = useState(0)
  const carrinho = JSON.parse(localStorage.getItem("carrinho"))
  
  useEffect(() => {  
    setCount(carrinho.length)
  }, [count, carrinho, itensNoCarrinho])
  

  return (
    <Link to="/carrinho" className='rounded-lg bg-neutral-800 py-1 px-2 flex items-center' >
        <IconShopping />
            <span className='pl-2 text-lg'>{count}</span>
    </Link>
  )
}

export default CartWidget