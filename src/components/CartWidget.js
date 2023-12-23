import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as IconShopping } from '../assets/icons/cart-shopping-solid.svg';


function CartWidget() {
    
  return (
    <Link to="/carrinho" className='rounded-lg bg-neutral-800 py-1 px-2 flex items-center' >
        <IconShopping />
            <span className='pl-2 text-lg'>0</span>
    </Link>
  )
}

export default CartWidget