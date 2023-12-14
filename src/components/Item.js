import React from 'react'
import ItemCount from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import { Link } from 'react-router-dom'

function Item({ id, title, category, price, pictureUrl, string }) {



    return (
    <Link to={`/item/${string}`} className='p-4 m-4 w-[150px] h-[200px] bg-zinc-50 border-zinc-100 border flex flex-col'>
        
        {title}
        
        <span>{category}</span>
    </Link>
    )
}

export default Item