import React from 'react'
import { ReactComponent as IconShopping } from '../assets/icons/cart-shopping-solid.svg';

function CartWidget() {
  return (
    <a className='rounded-lg bg-neutral-800 py-1 px-2 flex items-center' href='#'>
        <IconShopping />
            <span className='pl-2 text-lg'>0</span>
    </a>
  )
}

export default CartWidget