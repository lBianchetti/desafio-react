import React from 'react'
import ItemCount from './ItemCount'

function Item({ id, title, price, pictureUrl }) {
    return (
    <div className='p-4 min-w-[20%] h-[1000px] bg-zinc-50 border-zinc-100 border flex flex-col'>
        
        {title}

        <ItemCount stock={5} initial={1} />
    </div>
    )
}

export default Item