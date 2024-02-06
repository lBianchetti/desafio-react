import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as IconShopping } from '../assets/icons/cart-shopping-solid.svg';
import { useCartContext } from '../context/CartContext';


function CartWidget() {
  const { itensNoCarrinho } = useCartContext()
  const [carrinho, setCarrinho] = useState([])

  const [count, setCount] = useState(0)  
  const [length, setlength] = useState(0)  


  
  
  useEffect(() => {  
    setCarrinho(itensNoCarrinho)
    setlength(carrinho.length)
    setCount(length)
    console.log("widget update")
  }, [itensNoCarrinho, count, setCount, carrinho, length])
  

  return (
    <Link to="/carrinho" className='rounded-lg bg-neutral-800 py-1 px-2 flex items-center' >
        <IconShopping />
            <span className='pl-2 text-lg'>{count}</span>
    </Link>
  )
}

export default CartWidget