import React from 'react'
import { Link } from 'react-router-dom'



function Item({ id, sabor, categoria, imgUrl, string, preco, estoque }) {



    return (
    <Link to={`/${string}`} className='p-6 w-[500px] h-[500px] bg-zinc-50 border-zinc-100 border flex flex-col'>
        
        <h2 className='font-bold text-3xl text-center pb-[30px]'>{sabor}</h2>

        <img src={imgUrl} alt={string} className='w-[480px] h-[350px] object-cover'></img>
        
        <span className='place-self-end self-end justify-self-end text-zinc-300'>{categoria}</span>
    </Link>
    )
}

export default Item