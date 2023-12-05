import React, { useState } from 'react'

function ItemCount({ stock, initial}) {
    let  [count, setCount] = useState(initial)

function add(){
    if (count < stock) {
        setCount(count + 1)
    }
}

function sub(){
    if (count > 0) {
        setCount(count - 1)
    }
}

function Carrinho(){

}

    return (
        <div className='flex flex-col gap-2 m-auto'>
            <div className='w-48 flex justify-between m-auto'>
                <button onClick={add} className='px-4 bg-slate-100 rounded-md'>+</button>
                <span className='px-12 bg-slate-50 rounded-md'> {count} </span>
                <button onClick={sub} className='px-4 bg-slate-100 rounded-md'>-</button>
            </div>

            <button onClick={Carrinho} className='px-1 w-48 bg-slate-200 rounded-md m-auto'>Adicionar ao carrinho</button>

        </div>
    )
}

export default ItemCount