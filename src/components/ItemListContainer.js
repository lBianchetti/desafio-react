import React from 'react'
import Button from './Button'

function Item( { title,  } ){
    return (
        <div className='p-4 p-4 min-w-[20%] h-[1000px] bg-zinc-50 border-zinc-100 border '>
            {title}
            <Button text={"Comprar"}/>
        </div>
    )
}


function ItemListContainer() {
  return (
    <div className='flex flex-row flex-nowrap overflow-scroll max-w-full'>
        <Item title={"M&M's"} />
        <Item title={"Gotas de Chocolate"} />
        <Item title={"Ninho"} />
        <Item title={"Limão"} />
        <Item title={"Nutella"} />
        <Item title={"Branco"} />
        <Item title={"Brigadeiro"} />
    </div>
  )
}

export default ItemListContainer